import React from 'react';
import { PostSummaryList } from '../components/PostSummaryList.jsx';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(x => x.node);

  return <PostSummaryList title="blog" posts={posts} />;
};

export default BlogPage;

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
  }
`;
