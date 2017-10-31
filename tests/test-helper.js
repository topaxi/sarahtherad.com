import resolver from './helpers/resolver'
import { setResolver } from 'ember-qunit'
import { start } from 'ember-cli-qunit'
import { Promise } from 'rsvp'

if (!window.Promise) {
  window.Promise = Promise
}

setResolver(resolver)
start()
