import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ContentBlock from '../components/ContentBlock';

const AboutPage = ({ data }) => {
  const { html } = data.allMarkdownRemark.edges[0].node;
  const { title } = data.site.siteMetadata;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | About</title>
      </Helmet>
      <ContentBlock title="About Me">
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ContentBlock>
    </React.Fragment>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.any,
  }).isRequired,
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
    site {
      siteMetadata {
        title
      }
    }
  }
`;
