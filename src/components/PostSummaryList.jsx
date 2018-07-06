import React from 'react';
import { PostSummary } from './PostSummary.jsx';

export const PostSummaryList = (props) => {
  let posts = props.posts;

  return (
    <div>
      {posts.map( post => {
          return (
            <PostSummary
              key={post.id}
              post={post}
            />
          );
        })}
    </div>
  );
};
