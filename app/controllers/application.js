import Ember from 'ember'

const {
  Controller,
  String: { htmlSafe },
  inject,
  computed
} = Ember

export default Controller.extend({
  rootclass: inject.service(),
  radBackground: inject.service(),
  menuTitle: inject.service(),

  backgroundStyle: computed('radBackground.background', function() {
    let url = this.get('radBackground.background')

    return url !== null ? htmlSafe(`background-image: url(${url})`) : null
  }),

  headerStyle: computed('radBackground.color', function() {
    return htmlSafe(`color: ${this.get('radBackground.color')}`)
  }),
})
