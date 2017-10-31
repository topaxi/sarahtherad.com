import { Promise } from 'rsvp'

export default function wait(timeout, resolveWith) {
  return new Promise(resolve =>
    setTimeout(resolve.bind(null, resolveWith), timeout),
  )
}
