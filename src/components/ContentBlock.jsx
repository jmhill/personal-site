import React from 'react';

export const ContentBlock = (props) => {
  let content = props.content;

  return (
      <div>
        <h2 className="content-subhead">{content.title}</h2>
        <p className="post-description">{content.body}</p>
      </div>
  );
};

// ContentBlock.propTypes = {
//   content: React.PropTypes.shape({
//     title: React.PropTypes.string.isRequired,
//     body: React.PropTypes.string
//   }).isRequired
// };