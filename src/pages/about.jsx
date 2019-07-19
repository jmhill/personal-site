import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ContentBlock from '../components/ContentBlock';
import Gravatar from '../components/Gravatar';

// TODO: center gravatar image
const flexContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const AboutPage = ({ data }) => {
  const { html } = data.allMarkdownRemark.edges[0].node;
  const { title } = data.site.siteMetadata;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | About</title>
      </Helmet>
      <ContentBlock title="About Me">
        <div style={flexContainer}>
          <div>
            <Gravatar email="justinmhill@gmail.com" />
          </div>
        </div>
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
