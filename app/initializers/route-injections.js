export function initialize(application) {
  application.inject('route', 'fastboot', 'service:fastboot')
  application.inject('route', 'headData', 'service:head-data')
  application.inject('route', 'rad', 'service:rad')
  application.inject('route', 'radBackground', 'service:rad-background')
}

export default {
  name: 'route-injections',
  initialize,
}
