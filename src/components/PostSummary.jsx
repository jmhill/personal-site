import React from 'react';

export const PostSummary = (props) => {
  var post = props.post;

  return (
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
};

// function formatDate(dateString) {
//   const date = new Date(dateString);
//   const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

//   return date.toLocaleDateString('en-US', format);
// }

// PostSummary.propTypes = {
//   post: React.PropTypes.shape({
//     title: React.PropTypes.string.isRequired,
//     // url: React.PropTypes.string.isRequired,
//     date: React.PropTypes.string,
//     excerpt: React.PropTypes.string
//   }),
// };