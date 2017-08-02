import RSVP from 'rsvp'

export default function shoeboxModelDecorator(target, key, descriptor) {
  let initial = true;
  let original = descriptor.value
  descriptor.value = function shoeboxModel() {
    if (!initial) return original.apply(this, arguments)

    let shoebox = this.get('fastboot.shoebox')
    if (this.get('fastboot.isFastBoot')) {
      return RSVP.resolve(original.apply(this, arguments))
        .then(data => {
          shoebox.put(`${this.routeName}#${key}`, data)
          return data
        })
    }

    initial = false
    let data = shoebox.retrieve(`${this.routeName}#${key}`)

    if (!data) return original.apply(this, arguments)

    return data;
  }
  return descriptor
}
