import React from 'react';
import { ContentBlock } from '../components/ContentBlock';

const AboutPage = ({ data }) => {
  const { html } = data.allMarkdownRemark.edges[0].node;

  return (
    <ContentBlock title="About Me">
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ContentBlock>
  );
};

export default AboutPage;

export const AboutPageQuery = graphql`
  query AboutPage {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/about/" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
