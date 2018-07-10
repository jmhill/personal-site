import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import ContentBlock from '../components/ContentBlock';
import ContactCard from '../components/ContactCard';

const ContactPage = ({ data }) => {
  const { contact, social } = data.site.siteMetadata;
  const { title } = data.site.siteMetadata;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title} | Contact</title>
      </Helmet>
      <ContentBlock title="General Information">
        Feel free to contact me for more information about my work. I will get
        back to you within one business day. I look forward to hearing from you!
      </ContentBlock>
      <ContactCard header="Contact Details" contact={contact} social={social} />
    </React.Fragment>
  );
};

ContactPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.any,
  }).isRequired,
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage {
    site {
      siteMetadata {
        title
        contact {
          phone
          email
        }
        social {
          twitter
          linkedin
        }
      }
    }
  }
`;
