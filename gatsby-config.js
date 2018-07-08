module.exports = {
  siteMetadata: {
    title: 'Justin Hill',
    description: "software development, education, technology",
    siteUrl: "http://justinmhill.com",
    contact: {
      phone: "1-571-357-5760",
      email: "justinmhill@gmail.com",
    },
    social: {
      twitter: "justinmhill",
      github: "jmhill",
      gitlab: "jmhill",
      linkedin: "hilljustin"
    }
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        "excerpt_separator": '<!-- break -->'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-65534409-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  filter: { fields: { collection: { eq: "blog" } } }
                  sort: { order: DESC, fields: [frontmatter___date] }
                  limit: 1000
                ) {
                  totalCount
                  edges {
                    node {
                      frontmatter {
                        title
                        date(formatString: "MM/DD/YYYY")
                      }
                      excerpt(pruneLength: 280)
                      fields {
                        slug
                        path
                      }
                      html
                    }
                  }
                }
              }
            `,
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.path,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            output: '/feed.xml',
          },
        ],
      },
    },
  ],
}
