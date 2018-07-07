import React from 'react';
import { ContentBlock } from '../components/ContentBlock.jsx';
import { PostSummaryList } from '../components/PostSummaryList.jsx';

const IndexPage = ({data}) => {
  const content = {
    title: 'Welcome',
    body: `
    My name is Justin Hill and I am a tech enthusiast, web developer, and educator. Check out my recent blog posts below, or head over to the projects page to see what I'm working on.
    `,
  };
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
    allMarkdownRemark(
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