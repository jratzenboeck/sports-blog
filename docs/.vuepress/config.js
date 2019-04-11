module.exports = {
  title: 'jratzenboeck loves sports',
  description:
    'Mein persönlicher Sport Blog mit Themen zu Motivation, Training, Wettkampf, Regeneration und vielem mehr.',
  head: [['meta', { name: 'robots', content: 'index,follow' }]],
  themeConfig: {
    primaryColor: '#00838f',
    navbarItems: [
      {
        icon: 'home',
        title: 'Startseite',
        path: '/'
      },
      {
        icon: 'person',
        title: 'Über mich',
        path: '/about/'
      },
      {
        icon: 'medal',
        title: 'Wettkampfhighlights',
        path: '/records/'
      }
    ]
  },
  markdown: {
    anchor: {
      permalink: false
    }
  }
};
