import React from 'react';
import { PostSummary } from './PostSummary.jsx';

export const PostSummaryList = props => {
  const posts = props.posts;

  return (
    <div>
      <h2 className="content-subhead">{props.title}</h2>
      {posts.map(post => <PostSummary key={post.id} post={post} />)}
    </div>
  );
};
