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
      '/mongo.md',
      '/rethink.md',
      '/sqlite.md',
      {
        title: 'Elastic Search',
        collapsable: true,
        children: [
          '/es/introduction.md',
          '/es/dsl.md',
          '/es/api.md',
        ]
      },
    ]
  }
}