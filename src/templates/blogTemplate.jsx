import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

export default props => {
  const { markdownRemark } = props.data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const disqusConfig = {
    identifier: frontmatter.path,
    title: frontmatter.title
  };

  return (
    <div>
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
  )
}

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
`
