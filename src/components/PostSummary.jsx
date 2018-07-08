import React from 'react';
import PropTypes from 'prop-types';

export const PostSummary = ({ post }) => (
  <section className="post">
    <h2 className="post-title">
      <a href={post.fields.path}>{post.frontmatter.title}</a>
    </h2>
    <p className="post-meta">{post.frontmatter.date}</p>
    <div className="post-description">
      {post.excerpt}
      <a href={post.fields.path}> Read more...</a>
    </div>
  </section>
);

PostSummary.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
    excerpt: PropTypes.string,
  }).isRequired,
};

export default PostSummary;
