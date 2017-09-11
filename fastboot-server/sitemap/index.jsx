/* eslint node: true */
const express = require('express')
const XMLWriter = require('xml-writer')
const fetch = require('node-fetch')
const wrap = require('async-middleware').wrap
const flatMap = require('lodash.flatmap')
const API_BASE = 'https://sarahtherad.com/wp-json/rad'

const { Router } = express

const index = module.exports = new Router()

index.get('/sitemap.xml', (req, res) => {
  res.send(String(
    <sitemapindex xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
      <sitemap>
        <loc>https://sarahtherad.com/sitemap/index.xml</loc>
      </sitemap>
      <sitemap>
        <loc>https://sarahtherad.com/sitemap/blog.xml</loc>
      </sitemap>
      <sitemap>
        <loc>https://sarahtherad.com/sitemap/graphics.xml</loc>
      </sitemap>
    </sitemapindex>
  ))
})

index.get('/sitemap/index.xml', (req, res) => {
  res.send(String(
    <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
      <url>
        <loc>https://sarahtherad.com/</loc>
        <priority>1.0</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://sarahtherad.com/radio-show</loc>
        <priority>1.0</priority>
        <changefreq>weekly</changefreq>
      </url>
      <url>
        <loc>https://sarahtherad.com/about</loc>
        <priority>1.0</priority>
        <changefreq>weekly</changefreq>
      </url>
    </urlset>
  ))
})

index.get('/sitemap/graphics.xml', wrap(async (req, res) => {
  let graphics = await fetch(`${API_BASE}/graphics?sitemap=1`).then(r => r.json())

  res.send(String(
    <urlset
        xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'
        xmlns_image="http://www.google.com/schemas/sitemap-image/1.1">
      {
        graphics.data.map(post =>
          <url>
            <loc>https://sarahtherad.com/graphics/{post.slug}</loc>
            <changefreq>monthly</changefreq>
            {
              post.pictures
                .filter(picture => picture.mime !== 'application/pdf')
                .map(picture =>
                  <image_image>
                    <image_loc>{picture.src}</image_loc>
                    <image_title>{picture.title}</image_title>
                    <image_caption>{picture.caption}</image_caption>
                  </image_image>
                )
            }
          </url>
        )
      }
      {
        flatMap(graphics.data, post => post.pictures)
          .filter(picture => picture.mime === 'application/pdf')
          .map(pdf =>
            <url>
              <loc>{pdf.src}</loc>
            </url>
          )
      }
    </urlset>
  ))
}))

index.get('/sitemap/blog.xml', wrap(async (req, res) => {
  let graphics = await fetch(`${API_BASE}/posts?sitemap=1`).then(r => r.json())

  res.send(String(
    <urlset
        xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'
        xmlns_image="http://www.google.com/schemas/sitemap-image/1.1">
      {
        graphics.data.map(post =>
          <url>
            <loc>https://sarahtherad.com/blog/{post.slug}</loc>
            <changefreq>monthly</changefreq>
            <image_image>
              <image_loc>{post.background.url}</image_loc>
            </image_image>
          </url>
        )
      }
    </urlset>
  ))
}))

class Node {
  constructor(tagName, attrs, children) {
    this.tagName = tagName
    this.attrs = attrs
    this.children = children
    this.parentNode = null;
    this.children
      .filter(c => c instanceof Node)
      .forEach(c => c.parentNode = this)
  }

  toXML(xml) {
    // JSX does not support colons in attribute names..
    let tagName = this.tagName.includes('_') ?
      this.tagName.replace('_', ':') :
      this.tagName
    xml.startElement(tagName)

    if (this.attrs !== null) {
      for (let [ key, value ] of Object.entries(this.attrs)) {
        // JSX does not support colons in attribute names..
        if (key.includes('_')) {
          key = key.replace('_', ':')
        }

        xml.writeAttribute(key, value)
      }
    }

    for (let child of this.children) {
      if (typeof child === 'string') {
        xml.text(child)
      }
      else if (Array.isArray(child)) {
        child
          .filter(c => c instanceof Node)
          .forEach(c => c.toXML(xml))
      }
      else if (child instanceof Node) {
        child.toXML(xml)
      }
    }
    xml.endElement()
  }

  toString() {
    if (this.parentNode !== null) {
      throw new Error('Only able to serialize to XML from the root node')
    }

    let xml = new XMLWriter
    xml.startDocument('1.0', 'UTF-8')
    this.toXML(xml)
    return xml.toString()
  }
}

function createElement(tagName, attrs, ...children) {
  return new Node(tagName, attrs, children)
}
