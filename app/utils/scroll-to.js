import { scheduleOnce } from '@ember/runloop'

export default function scrollTo(selector, context) {
  if (!context.get('fastboot.isFastBoot')) {
    scheduleOnce('afterRender', context, () => {
      if (selector === 'top') {
        document.documentElement.scrollTop = 0

        return
      }

      let element = document.querySelector(selector)

      if (element) {
        element.scrollIntoView()
      }
    })
  }
}
