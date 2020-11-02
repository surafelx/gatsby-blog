module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "My MDX Blog",
    description: "Simple blog",
    url: "https://srflx.surge.sh",
    image: "/tree.jpg",
    twitterUsername: "@surafelx",
    author: "SRFL",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`pages`, 
        path: `${__dirname}/src/pages`
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`posts`, 
        path: `${__dirname}/src/posts`
      },
    }, 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`images`, 
        path: `${__dirname}/src/images`
      },
    }, 
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            option: {
              maxWidth: 1500,
              quality: 85
            },
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono`,
          `muli\:400,400i,700,700i,`
        ],
        display: "swap",
      },
    },  
  ],
}
