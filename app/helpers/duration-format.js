import Ember from 'ember';
import { padStart } from 'ember-pad/utils/pad'

export function durationFormat([ duration ]) {
  let hours   = Math.floor(duration / 3600);
  let minutes = Math.floor((duration - (hours * 3600)) / 60);
  let seconds = duration - (hours * 3600) - (minutes * 60);

  return hours + ':' +
    padStart(minutes, 2) + ':' +
    padStart(seconds, 2)
}

export default Ember.Helper.helper(durationFormat);
