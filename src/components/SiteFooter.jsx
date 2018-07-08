import React from 'react';
import PropTypes from 'prop-types';

const SiteFooter = ({ contact, social }) => (
  <footer className="footer">
    <div className="pure-menu pure-menu-horizontal">
      <ul>
        <li className="pure-menu-item footer-item">
          <a href={`mailto:${contact.email}`}>
            <i className="fa fa-envelope" /> Email
          </a>
        </li>

        <li className="pure-menu-item footer-item">
          <a href={`https://gitlab.com/${social.gitlab}`}>
            <i className="fa fa-gitlab" /> GitLab
          </a>
        </li>

        <li className="pure-menu-item footer-item">
          <a href={`https://github.com/${social.github}`}>
            <i className="fa fa-github" /> GitHub
          </a>
        </li>

        <li className="pure-menu-item footer-item">
          <a href={`https://twitter.com/${social.twitter}`}>
            <i className="fa fa-twitter" /> Twitter
          </a>
        </li>
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
