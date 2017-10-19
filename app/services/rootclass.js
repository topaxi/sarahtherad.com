import Service from '@ember/service'
import { computed } from '@ember/object'

export default Service.extend({
  _classNames: computed(function() {
    return ['root']
  }),

  classNames: computed('_classNames', function() {
    return this.get('_classNames').join(' ')
  }),

  add(className) {
    this.set('_classNames', [...this.get('_classNames'), slug(className)])
  },

  remove(_className) {
    let className = slug(_className)

    this.set(
      '_classNames',
      this.get('_classNames').filter(cn => cn !== className),
    )
  },
})

function slug(routeName) {
  return routeName.replace(/\./g, '_')
}
