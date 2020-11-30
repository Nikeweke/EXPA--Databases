module.exports = {
  title: 'Databases',
  description: 'Experience from databases world',
  base: '/EXPA--Databases/',
  dest: '../docs',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      // { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/mysql.md',
      '/rethink.md',
      '/sqlite.md',

      require('../elastic-search/__index'),

      require('../mongo/__index'),
     
    ]
  }
}


