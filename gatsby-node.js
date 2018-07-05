/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.jsx`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              path
              date(formatString: "MM/DD/YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // Extract all of the date information from the frontmatter
      [month, day, year] = node.frontmatter.date.split('/');

      // Generate pages with date + slug paths
      createPage({
        path: `/blog/${year}/${month}/${day}/${node.frontmatter.path}/`,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
        }, // additional data can be passed via context
      });
    });
  });
};

