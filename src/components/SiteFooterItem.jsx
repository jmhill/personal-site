import React from 'react';
import PropTypes from 'prop-types';

const SiteFooterItem = ({ linkAddress, faClass, children }) => (
  <li className="pure-menu-item footer-item">
    <a href={linkAddress}>
      <i className={`fa fa-${faClass}`} /> {children}
    </a>
  </li>
);

SiteFooterItem.propTypes = {
  linkAddress: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  faClass: PropTypes.string.isRequired,
};

export default SiteFooterItem;
