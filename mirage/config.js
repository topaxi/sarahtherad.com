export default function() {
  this.namespace = '/wp-json/'
  this.timing = 400

  this.get('/rad/home', function() {
    return { data: [] }
  })

  this.get('/rad/posts', function() {
    return {
      data: [],
    }
  })

  this.get('/rad/posts/:slug', function() {
    return {}
  })

  this.get('/rad/graphics', function() {
    return {
      data: [],
    }
  })

  this.get('/rad/graphics/:slug', function() {
    return {
      id: 1,
      type: 'graphics',
      slug: 'ninja-kitty',
      date: '2017-08-01T20:30:56',
      modified: '2017-09-04T09:46:24',
      title: 'Ninja Kitty',
      thumbnail: false,
      pictures: [
        {
          src: '/graphics/ninja_d-sitting.svg',
          width: null,
          height: null,
          title: 'ninja_d-sitting',
          caption: null,
          mime: 'image/svg+xml',
        },
        {
          src: '/graphics/ninja_d-sleepin_def.svg',
          width: null,
          height: null,
          title: 'ninja_d-sleepin_def',
          caption: null,
          mime: 'image/svg+xml',
        },
        {
          src: '/graphics/ninja_d-fighting2.svg',
          width: null,
          height: null,
          title: 'ninja_d-fighting2',
          caption: null,
          mime: 'image/svg+xml',
        },
        {
          src: '/graphics/ninja_d-fighting.svg',
          width: null,
          height: null,
          title: 'ninja_d-fighting',
          caption: null,
          mime: 'image/svg+xml',
        },
        {
          src: '/graphics/ninja_d-404.svg',
          width: null,
          height: null,
          title: 'ninja_d-404',
          caption: null,
          mime: 'image/svg+xml',
        },
        {
          src: '/graphics/ninja_d-pizzaiolo.svg',
          width: null,
          height: null,
          title: 'ninja_d-pizzaiolo',
          caption: null,
          mime: 'image/svg+xml',
        },
      ],
      content:
        '<p>So Topaxi asked me to create some kind of ninja avatar for him. I decided to go for a ninja kitty because it seemed to fit perfectly. I ended up making various versions of it because it was such a lot of fun to do so. You can find the little guy in his natural habitat on <a href="http://www.topaxi.com">Topaxi&#8217;s website</a>.</p>\n',
    }
  })

  this.get('/rad/background', function() {
    return {
      data: {},
    }
  })

  this.get(
    'https://api.mixcloud.com/derdienstagmorgen/cloudcasts/',
    function() {
      return {
        paging: {
          next:
            'https://api.mixcloud.com/derdienstagmorgen/cloudcasts/?limit=20&offset=20',
        },
        data: [
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage/',
                name: 'Garage',
                key: '/discover/garage/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-punk/',
                name: 'Garage Punk',
                key: '/discover/garage-punk/',
              },
            ],
            play_count: 19,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/november/',
            created_time: '2017-11-07T13:10:44Z',
            audio_length: 10779,
            slug: 'november',
            favorite_count: 0,
            listener_count: 1,
            name: 'November! ',
            url: 'https://www.mixcloud.com/DerDienstagMorgen/november/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/a/0/e/7/0a42-b6ae-4baf-ac26-64f9e8c67efc',
            },
            repost_count: 0,
            updated_time: '2017-11-07T12:59:02Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url:
                  'https://www.mixcloud.com/discover/80snew-wavealternative/',
                name: '80s/New Wave/Alternative',
                key: '/discover/80snew-wavealternative/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/halloween/',
                name: 'Halloween',
                key: '/discover/halloween/',
              },
            ],
            play_count: 21,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/this-is-not-a-halloween-special/',
            created_time: '2017-10-31T14:08:59Z',
            audio_length: 10227,
            slug: 'this-is-not-a-halloween-special',
            favorite_count: 0,
            listener_count: 0,
            name: '(this is not a) HALLOWEEN SPECIAL!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/this-is-not-a-halloween-special/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/a/b/8/9/4436-dc0f-4721-8fb0-9088132cb003',
            },
            repost_count: 0,
            updated_time: '2017-10-31T14:05:25Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/rock-n-roll/',
                name: "Rock 'n' roll",
                key: '/discover/rock-n-roll/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-rock/',
                name: 'Post-rock',
                key: '/discover/post-rock/',
              },
            ],
            play_count: 24,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/reunited-with-kevin/',
            created_time: '2017-10-25T07:00:46Z',
            audio_length: 10781,
            slug: 'reunited-with-kevin',
            favorite_count: 0,
            listener_count: 4,
            name: 'Reunited with Kevin!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/reunited-with-kevin/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/c/f/c/f/4581-38e9-4ebf-a873-82db91c39eca',
            },
            repost_count: 0,
            updated_time: '2017-10-25T06:47:11Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/rocknroll/',
                name: "Rock'n'roll",
                key: '/discover/rocknroll/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
            ],
            play_count: 36,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/this-time-of-the-week-again/',
            created_time: '2017-10-17T12:25:07Z',
            audio_length: 10784,
            slug: 'this-time-of-the-week-again',
            favorite_count: 0,
            listener_count: 2,
            name: 'This time of the week again! ',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/this-time-of-the-week-again/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/b/2/9/7/4d6a-e1d2-4dc1-a36c-4c7391eecf92',
            },
            repost_count: 0,
            updated_time: '2017-10-17T12:18:06Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/stoner/',
                name: 'STONER',
                key: '/discover/stoner/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-rock/',
                name: 'Post-rock',
                key: '/discover/post-rock/',
              },
            ],
            play_count: 11,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/punk-ist-das-geilste/',
            created_time: '2017-10-11T06:58:40Z',
            audio_length: 10773,
            slug: 'punk-ist-das-geilste',
            favorite_count: 0,
            listener_count: 1,
            name: 'Punk ist das geilste!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/punk-ist-das-geilste/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/0/b/7/9/3b92-9f25-4c4c-ae41-6737475928f8',
            },
            repost_count: 0,
            updated_time: '2017-10-11T06:34:39Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage/',
                name: 'Garage',
                key: '/discover/garage/',
              },
              {
                url: 'https://www.mixcloud.com/discover/alternative-rock/',
                name: 'Alternative Rock',
                key: '/discover/alternative-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
            ],
            play_count: 9,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/tunes-zum-gl%C3%BCck/',
            created_time: '2017-10-04T09:16:04Z',
            audio_length: 10800,
            slug: 'tunes-zum-gl\u00fcck',
            favorite_count: 0,
            listener_count: 1,
            name: 'Tunes zum Gl\u00fcck!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/tunes-zum-gl%C3%BCck/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/3/d/1/d/bdd1-23b1-46fa-b49b-9e7627b9093f',
            },
            repost_count: 0,
            updated_time: '2017-10-04T09:06:16Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/hip-hop/',
                name: 'Hip hop',
                key: '/discover/hip-hop/',
              },
              {
                url: 'https://www.mixcloud.com/discover/rap/',
                name: 'Rap',
                key: '/discover/rap/',
              },
              {
                url: 'https://www.mixcloud.com/discover/old-school/',
                name: 'Old school',
                key: '/discover/old-school/',
              },
              {
                url: 'https://www.mixcloud.com/discover/old-school-hip-hop/',
                name: 'Old school hip hop',
                key: '/discover/old-school-hip-hop/',
              },
            ],
            play_count: 10,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/beats-beats-beats/',
            created_time: '2017-09-27T11:19:29Z',
            audio_length: 10800,
            slug: 'beats-beats-beats',
            favorite_count: 0,
            listener_count: 0,
            name: 'Beats Beats Beats!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/beats-beats-beats/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/f/7/8/7/184c-e5fe-47bf-9f3f-dfea9357303a',
            },
            repost_count: 0,
            updated_time: '2017-09-27T11:10:55Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage/',
                name: 'Garage',
                key: '/discover/garage/',
              },
              {
                url: 'https://www.mixcloud.com/discover/surf/',
                name: 'Surf',
                key: '/discover/surf/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
            ],
            play_count: 15,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/fun-morning-with-swamp-digger/',
            created_time: '2017-09-27T10:46:24Z',
            audio_length: 10800,
            slug: 'fun-morning-with-swamp-digger',
            favorite_count: 0,
            listener_count: 0,
            name: 'Fun Morning with Swamp Digger',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/fun-morning-with-swamp-digger/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/9/c/9/f/0b3a-1a99-406f-b518-6e059f27b5a2',
            },
            repost_count: 0,
            updated_time: '2017-09-27T10:27:21Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage/',
                name: 'Garage',
                key: '/discover/garage/',
              },
              {
                url: 'https://www.mixcloud.com/discover/metal/',
                name: 'Metal',
                key: '/discover/metal/',
              },
              {
                url: 'https://www.mixcloud.com/discover/stoner/',
                name: 'STONER',
                key: '/discover/stoner/',
              },
            ],
            play_count: 16,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/fresh-morning-with-fresh-new-tunes/',
            created_time: '2017-09-20T11:27:31Z',
            audio_length: 10800,
            slug: 'fresh-morning-with-fresh-new-tunes',
            favorite_count: 0,
            listener_count: 0,
            name: 'Fresh Morning with Fresh New Tunes!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/fresh-morning-with-fresh-new-tunes/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/9/0/5/c/6de0-167b-4c81-890d-1a3e684ffa70',
            },
            repost_count: 0,
            updated_time: '2017-09-20T11:11:20Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/psychobilly/',
                name: 'Psychobilly',
                key: '/discover/psychobilly/',
              },
              {
                url: 'https://www.mixcloud.com/discover/blues-rock/',
                name: 'Blues rock',
                key: '/discover/blues-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
            ],
            play_count: 40,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/just-the-best-tunes-for-your-morning/',
            created_time: '2017-09-13T08:57:31Z',
            audio_length: 10784,
            slug: 'just-the-best-tunes-for-your-morning',
            favorite_count: 0,
            listener_count: 0,
            name: 'Just the best tunes for your morning',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/just-the-best-tunes-for-your-morning/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/2/9/1/6/e83f-ba1b-4afe-9a5f-b1595b151231',
            },
            repost_count: 0,
            updated_time: '2017-09-13T08:14:59Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/metal/',
                name: 'Metal',
                key: '/discover/metal/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-rock/',
                name: 'Post-rock',
                key: '/discover/post-rock/',
              },
            ],
            play_count: 46,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/morning-tunes-and-isc-rockout/',
            created_time: '2017-09-05T14:10:07Z',
            audio_length: 10800,
            slug: 'morning-tunes-and-isc-rockout',
            favorite_count: 0,
            listener_count: 7,
            name: 'Morning Tunes And ISC Rockout',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/morning-tunes-and-isc-rockout/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/7/8/a/7/abd1-04ed-40e5-9e93-df184e0da3ec',
            },
            repost_count: 0,
            updated_time: '2017-09-05T14:05:05Z',
            comment_count: 2,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/stoner/',
                name: 'STONER',
                key: '/discover/stoner/',
              },
            ],
            play_count: 51,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/groovy-morning-with-groove-druids/',
            created_time: '2017-08-30T16:18:01Z',
            audio_length: 10800,
            slug: 'groovy-morning-with-groove-druids',
            favorite_count: 1,
            listener_count: 1,
            name: 'Groovy Morning with Groove Druids',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/groovy-morning-with-groove-druids/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/3/4/0/5/9f22-3e11-4dee-8b22-c22d4f78d740',
            },
            repost_count: 0,
            updated_time: '2017-08-30T16:01:34Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/hardcore/',
                name: 'Hardcore',
                key: '/discover/hardcore/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/metal/',
                name: 'Metal',
                key: '/discover/metal/',
              },
            ],
            play_count: 32,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/back-at-it-again/',
            created_time: '2017-08-22T13:09:16Z',
            audio_length: 10765,
            slug: 'back-at-it-again',
            favorite_count: 0,
            listener_count: 1,
            name: 'Back at it again!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/back-at-it-again/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/7/9/2/a/a392-6460-479c-b5d6-d66410e31c48',
            },
            repost_count: 0,
            updated_time: '2017-08-22T12:42:23Z',
            comment_count: 1,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/folk/',
                name: 'Folk',
                key: '/discover/folk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/hardcore/',
                name: 'Hardcore',
                key: '/discover/hardcore/',
              },
            ],
            play_count: 26,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/happy-birthday-swizzwie-with-the-shabs/',
            created_time: '2017-08-01T16:57:15Z',
            audio_length: 10800,
            slug: 'happy-birthday-swizzwie-with-the-shabs',
            favorite_count: 0,
            listener_count: 1,
            name: 'Happy Birthday Swizzie with The Shabs',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/happy-birthday-swizzwie-with-the-shabs/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/f/f/e/9/eaac-0d00-495a-80f4-915b7c37928e',
            },
            repost_count: 0,
            updated_time: '2017-08-01T16:39:49Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/hardcore/',
                name: 'Hardcore',
                key: '/discover/hardcore/',
              },
              {
                url: 'https://www.mixcloud.com/discover/stoner/',
                name: 'STONER',
                key: '/discover/stoner/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
            ],
            play_count: 84,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/nobordersnonations/',
            created_time: '2017-07-25T14:35:57Z',
            audio_length: 10755,
            slug: 'nobordersnonations',
            favorite_count: 0,
            listener_count: 2,
            name: 'NoBordersNoNations',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/nobordersnonations/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
            },
            repost_count: 0,
            updated_time: '2017-07-25T14:15:38Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage/',
                name: 'Garage',
                key: '/discover/garage/',
              },
              {
                url: 'https://www.mixcloud.com/discover/hardcore/',
                name: 'Hardcore',
                key: '/discover/hardcore/',
              },
              {
                url: 'https://www.mixcloud.com/discover/stoner/',
                name: 'STONER',
                key: '/discover/stoner/',
              },
            ],
            play_count: 25,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/finally-tuesday-morning-again/',
            created_time: '2017-07-18T12:36:43Z',
            audio_length: 10800,
            slug: 'finally-tuesday-morning-again',
            favorite_count: 0,
            listener_count: 1,
            name: 'Finally Tuesday Morning Again!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/finally-tuesday-morning-again/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/9/e/d/b/6c93-2b71-40c2-ac55-e95d0a1677a9',
            },
            repost_count: 0,
            updated_time: '2017-07-18T12:18:55Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage/',
                name: 'Garage',
                key: '/discover/garage/',
              },
              {
                url: 'https://www.mixcloud.com/discover/hardcore/',
                name: 'Hardcore',
                key: '/discover/hardcore/',
              },
              {
                url: 'https://www.mixcloud.com/discover/blues-rock/',
                name: 'Blues rock',
                key: '/discover/blues-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
            ],
            play_count: 31,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/and-on-goes-the-festival-summer/',
            created_time: '2017-07-11T12:55:35Z',
            audio_length: 10792,
            slug: 'and-on-goes-the-festival-summer',
            favorite_count: 0,
            listener_count: 0,
            name: 'And on goes the festival summer!',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/and-on-goes-the-festival-summer/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/c/5/a/2/420b-a908-45a9-be9f-542fceca6fd7',
            },
            repost_count: 0,
            updated_time: '2017-07-11T12:49:07Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/stoner/',
                name: 'STONER',
                key: '/discover/stoner/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
            ],
            play_count: 46,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/summers-back/',
            created_time: '2017-07-04T12:57:41Z',
            audio_length: 10800,
            slug: 'summers-back',
            favorite_count: 0,
            listener_count: 3,
            name: "Summer's back!",
            url: 'https://www.mixcloud.com/DerDienstagMorgen/summers-back/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/c/7/b/1/fd88-38c8-4895-9421-5926217431f9',
            },
            repost_count: 0,
            updated_time: '2017-07-04T12:40:55Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/garage/',
                name: 'Garage',
                key: '/discover/garage/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-rock/',
                name: 'Post-rock',
                key: '/discover/post-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/noise-rock/',
                name: 'Noise rock',
                key: '/discover/noise-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/stoner/',
                name: 'STONER',
                key: '/discover/stoner/',
              },
            ],
            play_count: 37,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key:
              '/DerDienstagMorgen/derdienstagmorgen-schmittner-openair-special/',
            created_time: '2017-06-27T11:06:13Z',
            audio_length: 10791,
            slug: 'derdienstagmorgen-schmittner-openair-special',
            favorite_count: 0,
            listener_count: 0,
            name: 'DerDienstagMorgen: Schmittner Openair Special',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/derdienstagmorgen-schmittner-openair-special/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/3/9/9/f/856b-0e0e-4210-9545-754543e9a0e9',
            },
            repost_count: 0,
            updated_time: '2017-06-27T11:05:45Z',
            comment_count: 0,
          },
          {
            tags: [
              {
                url: 'https://www.mixcloud.com/discover/punk/',
                name: 'Punk',
                key: '/discover/punk/',
              },
              {
                url: 'https://www.mixcloud.com/discover/punk-rock/',
                name: 'Punk Rock',
                key: '/discover/punk-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/hardcore/',
                name: 'Hardcore',
                key: '/discover/hardcore/',
              },
              {
                url: 'https://www.mixcloud.com/discover/garage-rock/',
                name: 'Garage rock',
                key: '/discover/garage-rock/',
              },
              {
                url: 'https://www.mixcloud.com/discover/post-punk/',
                name: 'Post-punk',
                key: '/discover/post-punk/',
              },
            ],
            play_count: 18,
            user: {
              url: 'https://www.mixcloud.com/DerDienstagMorgen/',
              username: 'DerDienstagMorgen',
              name: 'DerDienstagMorgen',
              key: '/DerDienstagMorgen/',
              pictures: {
                medium:
                  'https://thumbnailer.mixcloud.com/unsafe/100x100/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '320wx320h':
                  'https://thumbnailer.mixcloud.com/unsafe/320x320/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                extra_large:
                  'https://thumbnailer.mixcloud.com/unsafe/600x600/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                large:
                  'https://thumbnailer.mixcloud.com/unsafe/300x300/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                '640wx640h':
                  'https://thumbnailer.mixcloud.com/unsafe/640x640/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                medium_mobile:
                  'https://thumbnailer.mixcloud.com/unsafe/80x80/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                small:
                  'https://thumbnailer.mixcloud.com/unsafe/25x25/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
                thumbnail:
                  'https://thumbnailer.mixcloud.com/unsafe/50x50/profile/0/a/2/0/b80c-aa35-4989-bbe2-e800292a7d07',
              },
            },
            key: '/DerDienstagMorgen/hot-guitars-for-hot-weather/',
            created_time: '2017-06-20T16:06:04Z',
            audio_length: 10800,
            slug: 'hot-guitars-for-hot-weather',
            favorite_count: 0,
            listener_count: 0,
            name: 'Hot Guitars For Hot Weather',
            url:
              'https://www.mixcloud.com/DerDienstagMorgen/hot-guitars-for-hot-weather/',
            pictures: {
              medium:
                'https://thumbnailer.mixcloud.com/unsafe/100x100/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              '768wx768h':
                'https://thumbnailer.mixcloud.com/unsafe/768x768/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              '320wx320h':
                'https://thumbnailer.mixcloud.com/unsafe/320x320/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              extra_large:
                'https://thumbnailer.mixcloud.com/unsafe/600x600/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              large:
                'https://thumbnailer.mixcloud.com/unsafe/300x300/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              '640wx640h':
                'https://thumbnailer.mixcloud.com/unsafe/640x640/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              medium_mobile:
                'https://thumbnailer.mixcloud.com/unsafe/80x80/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              small:
                'https://thumbnailer.mixcloud.com/unsafe/25x25/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              '1024wx1024h':
                'https://thumbnailer.mixcloud.com/unsafe/1024x1024/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
              thumbnail:
                'https://thumbnailer.mixcloud.com/unsafe/50x50/extaudio/2/b/b/3/818a-7da1-4292-b04d-bfcf992a5e40',
            },
            repost_count: 0,
            updated_time: '2017-06-20T16:00:10Z',
            comment_count: 0,
          },
        ],
        name: "DerDienstagMorgen's Cloudcasts",
      }
    },
  )
}
