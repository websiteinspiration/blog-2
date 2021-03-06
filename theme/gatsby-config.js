const pkg = require('./package.json')

module.exports = {
  siteMetadata: {
    title: 'Jxnblk',
    description: 'Blog',
    siteUrl: 'https://jxnblk.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
      }
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'src/notes',
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: require('./feed')
    },
  ]
}
