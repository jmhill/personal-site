import React from 'react';
import PropTypes from 'prop-types';

import SiteFooterItem from './SiteFooterItem';

const SiteFooter = ({ contact, social }) => (
  <footer className="footer">
    <div className="pure-menu pure-menu-horizontal">
      <ul>
        <SiteFooterItem
          linkAddress={`mailto:${contact.email}`}
          faClass="envelope"
        >
          Email
        </SiteFooterItem>
        <SiteFooterItem
          linkAddress={`https://gitlab.com/${social.gitlab}`}
          faClass="gitlab"
        >
          GitLab
        </SiteFooterItem>
        <SiteFooterItem
          linkAddress={`https://github.com/${social.github}`}
          faClass="github"
        >
          GitHub
        </SiteFooterItem>
        <SiteFooterItem
          linkAddress={`https://twitter.com/${social.twitter}`}
          faClass="twitter"
        >
          Twitter
        </SiteFooterItem>
      </ul>
    </div>
  </footer>
);

SiteFooter.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  social: PropTypes.shape({
    gitlab: PropTypes.string,
    github: PropTypes.string,
    twitter: PropTypes.string,
  }).isRequired,
};

export default SiteFooter;
