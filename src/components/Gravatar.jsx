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

// TODO:
// 1. provide option to choose image size
// 2. provide option to make square or circle - DONE
// 3. Check on fallback image option (or just collapse if image not available?)
const Gravatar = ({ email, shape }) => {
  const emailHash = hash.update(email).digest('hex');
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;

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
};

Gravatar.defaultProps = {
  shape: 'square',
};

export default Gravatar;
