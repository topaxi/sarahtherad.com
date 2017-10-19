export default function stripHtml(str) {
  if (typeof str !== 'string') {
    return ''
  }

  return str.replace(/<(?:.|\n)*?>/gm, '').replace(/^\s+|\s+$/gm, '')
}
