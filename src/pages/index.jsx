import React from 'react';
import PropTypes from 'prop-types';

import ContentBlock from '../components/ContentBlock';
import PostSummaryList from '../components/PostSummaryList';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(x => x.node);
  const message =
    "My name is Justin Hill and I am a tech enthusiast, web developer, and educator. Check out my recent blog posts below, or head over to the projects page to see what I'm working on.";

  return (
    <div>
      <ContentBlock title="Welcome">{message}</ContentBlock>
      <PostSummaryList title="Recent Posts" posts={posts} />
    </div>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.any,
  }).isRequired,
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 5
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
  }
`;
