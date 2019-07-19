import React from 'react';
import PropTypes from 'prop-types';
import { createHash } from 'crypto';

const hash = createHash('md5');

const imageStyles = shape => {
  const styleObject = {};

  if (shape === 'circle') {
    styleObject.borderRadius = '50%';
  }

  return styleObject;
};

const Gravatar = ({ email, shape, size }) => {
  const emailHash = hash.update(email).digest('hex');
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?size=${size}`;

  return (
    <img
      src={gravatarUrl}
      alt={`Gravatar: ${email}`}
      style={imageStyles(shape)}
    />
  );
};

Gravatar.propTypes = {
  email: PropTypes.string.isRequired,
  shape: PropTypes.oneOf(['square', 'circle']),
  size: PropTypes.number,
};

Gravatar.defaultProps = {
  shape: 'square',
  size: 80,
};

export default Gravatar;
