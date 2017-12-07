import Application from '../app'
import { setApplication } from '@ember/test-helpers'
import { start } from 'ember-qunit'
import { Promise } from 'rsvp'

if (!window.Promise) {
  window.Promise = Promise
}

setApplication(Application.create({ autoboot: false }))

start()
