const cookieConsent =
  "window.addEventListener('load', function() { window.cookieconsent.initialise({ palette: { popup: { background: '#252e39' }, button: { background: '#14a7d0' } }, content: { message: 'Diese Webseite verwendet Cookies für Analyse- und Messungszwecke. Durch die Nutzung dieser Webseite stimmen Sie der Nutzung von Cookies zu.', dismiss: 'Ok, verstanden', link: 'Mehr erfahren' } });});";

module.exports = {
  title: 'jratzenboeck loves sports',
  description:
    'Mein persönlicher Sport Blog mit Themen zu Motivation, Training, Wettkampf, Regeneration und vielem mehr.',
  head: [
    ['meta', { name: 'robots', content: 'index,follow' }],
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css'
      }
    ],
    [
      'script',
      {
        src: '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js',
        defer: true
      }
    ],
    ['script', {}, cookieConsent]
  ],
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
