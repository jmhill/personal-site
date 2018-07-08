import React from 'react';
import PropTypes from 'prop-types';
import { PostSummary } from './PostSummary';

const PostSummaryList = ({ posts, title }) => (
  <div>
    <h2 className="content-subhead">{title}</h2>
    {posts.map(post => <PostSummary key={post.id} post={post} />)}
  </div>
);

PostSummaryList.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
};

PostSummaryList.defaultProps = {
  posts: [],
};

export default PostSummaryList;
