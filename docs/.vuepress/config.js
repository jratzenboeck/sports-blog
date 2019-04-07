module.exports = {
  themeConfig: {
    primaryColor: '#00838f',
    navbarItems: [
      {
        icon: '$vuetify.icons.home',
        title: 'Startseite',
        path: '/'
      },
      {
        icon: '$vuetify.icons.person',
        title: 'Über mich',
        path: '/about/'
      },
      {
        icon: '$vuetify.icons.medal',
        title: 'Wettkampfhighlights',
        path: '/records/'
      }
    ]
  }
};
