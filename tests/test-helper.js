import Application from '../app'
import config from '../config/environment'
import { setApplication } from '@ember/test-helpers'
import { start } from 'ember-qunit'
import { Promise } from 'rsvp'

if (!window.Promise) {
  window.Promise = Promise
}

setApplication(Application.create(config.APP))

start()
