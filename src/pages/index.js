import React from 'react';
import { ContentBlock } from '../components/ContentBlock.jsx';
import { PostSummaryList } from '../components/PostSummaryList.jsx';

const IndexPage = ({data}) => {
  const content = { title: 'Testing', body: 'This is a test content block'};
  const posts = data.allMarkdownRemark.edges.map(x => x.node);

  return (
    <div>
      <ContentBlock content={content} />
      <h2 className="content-subhead">Recent Posts</h2>
      <PostSummaryList posts={posts} />
    </div>
  );
};

export default IndexPage;

export const indexPageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
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