export default function query(params) {
  let keys = Object.keys(params).filter(k => params[k] != null)

  if (keys.length === 0) {
    return ''
  }

  return (
    '?' +
    keys
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&')
  )
}
