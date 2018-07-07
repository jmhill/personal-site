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
    // pass in the collection name as a field
    const parent = getNode(node.parent);
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName
    });

    // Get the filename slug
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    // Extract all of the date information from the frontmatter
    if (node.frontmatter && node.frontmatter.date) {
      const [ year, month, day ] = node.frontmatter.date.split('-');
      const formattedPath = `/blog/${year}/${month}/${day}/${node.frontmatter.path}/`;
      createNodeField({
        node,
        name: `path`,
        value: formattedPath,
      });
    } else {
      createNodeField({
        node,
        name: 'path',
        value: slug
      });
    }
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.jsx`);

  return graphql(`
    {
      allFile (
        filter: {
          sourceInstanceName: {
            eq: "blog"
          }
        }
      ){
        edges {
          node {
            id
            childMarkdownRemark {
              id
              fields {
                slug
                path
              }
              frontmatter {
                title
                path
                date
              }
              excerpt
              timeToRead
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allFile.edges.forEach(({ node }) => {
      // Generate pages with date + slug paths
      const item = node.childMarkdownRemark;
      createPage({
        path: item.fields.path,
        component: blogPostTemplate,
        context: {
          slug: item.fields.slug,
        }, // additional data can be passed via context
      });
    });
  });
};

