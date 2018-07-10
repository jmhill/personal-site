/* eslint-disable react/no-danger */
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { DiscussionEmbed } from 'disqus-react';

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const disqusConfig = {
    identifier: frontmatter.path,
    title: frontmatter.title,
  };

  return (
    <div>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <h2 className="content-subhead">Blog</h2>
      <div className="post">
        <header className="post-header">
          <h1 className="post-title">{frontmatter.title}</h1>
          <p className="post-meta">{frontmatter.date}</p>
        </header>

        <article
          className="post-description"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <DiscussionEmbed shortname="justinmhill" config={disqusConfig} />
    </div>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }).isRequired,
};

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
