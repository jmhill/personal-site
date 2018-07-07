import React from 'react';
import { PostSummaryList } from '../components/PostSummaryList.jsx';

const BlogPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges.map(x => x.node);

  return (
    <div>
      <h2 className="content-subhead">Blog</h2>
      <PostSummaryList posts={posts} />
    </div>
  );
};

export default BlogPage;

export const BlogPageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
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
          excerpt
          fields {
            slug
            path
          }
        }
      }
    }
  }
`;