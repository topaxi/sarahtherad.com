import Ember from 'ember'

const { Controller, computed } = Ember

export default Controller.extend({
  queryParams: [ 'page' ],
  page: null,
  hasMore: computed('model.data.length', function() {
    return this.get('model.paging.next')
  }),
  isFirstPage: computed('page', function() {
    return (this.get('page')|0) === 0
  }),
  previousPage: computed('page', function() {
    return (this.get('page')|0) - 1
  }),
  nextPage: computed('page', function() {
    return (this.get('page')|0) + 1
  }),
})
