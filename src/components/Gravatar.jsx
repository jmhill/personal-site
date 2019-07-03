import React from 'react';
import PropTypes from 'prop-types';
import { createHash } from 'crypto';

const hash = createHash('md5');

const Gravatar = ({ email }) => {
  const emailHash = hash.update(email).digest('hex');
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}`;

  return <img src={gravatarUrl} alt={`Gravatar: ${email}`} />;
};

Gravatar.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Gravatar;
