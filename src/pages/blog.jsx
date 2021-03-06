import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PostSummaryList from '../components/PostSummaryList';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(x => x.node);
  const { title } = data.site.siteMetadata;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | Blog</title>
      </Helmet>
      <PostSummaryList title="blog" posts={posts} />;
    </React.Fragment>
  );
};

export default BlogPage;

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.any,
  }).isRequired,
};
export const BlogPageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
          }
          excerpt(pruneLength: 280)
          fields {
            slug
            path
            collection
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
