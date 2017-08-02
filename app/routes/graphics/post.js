import Ember from 'ember'
import shoebox from '../../utils/shoebox'

const { Route } = Ember

export default Route.extend({
  @shoebox
  model({ slug }) {
    return this.rad.graphic(slug)
  },
})
