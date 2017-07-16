import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      id: 4,
      type: 'posts',
      slug: 'the-doors',
      title: 'The Doors',
      body: `<p>The doors to your mind are big and heavy and old. as old as the world. u have been here for so many times, you lost count in between.
during all the years of walking the earth, you learned how to keep them closed. there were many attemps to break them open. to get a glimpse inside.
but your doors did hold. then, now, always. they were built to endure all of the times. to keep inside what's behind.
but baby I dont care what you hide behind your doors. I've seen it all. the monsters, the demons, the abyss within. there's nothing I couldn't take. I've known you for a day, I've known you for a 100 years, what does it even matter.
I can show you what it's like. what it's all about. I can take you high. I can set you free. I'm the one.</p>`,
    }
  }
});
