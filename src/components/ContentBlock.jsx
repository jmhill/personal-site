import React from 'react';
import PropTypes from 'prop-types';

const ContentBlock = ({ title, children }) => (
  <div>
    <h2 className="content-subhead">{title}</h2>
    <div className="post-description">{children}</div>
  </div>
);

ContentBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContentBlock;
// ContentBlock.propTypes = {
//   content: React.PropTypes.shape({
//     title: React.PropTypes.string.isRequired,
//     body: React.PropTypes.string
//   }).isRequired
// };
