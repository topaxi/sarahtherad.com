import RSVP from 'rsvp'

export default function wait(timeout, resolveWith) {
  return new RSVP.Promise(resolve =>
    setTimeout(resolve.bind(null, resolveWith), timeout),
  )
}
