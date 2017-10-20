export default function pad(n) {
  n = n | 0
  return (n < 10 ? '0' : '') + n
}
