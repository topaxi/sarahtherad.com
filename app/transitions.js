export default function() {
  const duration = 200

  this.transition(
    this.fromRoute('index'),
    this.toRoute([ 'graphics', 'blog' ]),
    this.useAndReverse('explode',
      {
        matchBy: 'data-post-id',
        use: [ 'fly-to', { duration } ],
      },
    ),
  )
}
