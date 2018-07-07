import React from 'react'
import { ContentBlock } from '../components/ContentBlock.jsx'

const AboutPage = ({ data }) => {
  const html = data.allMarkdownRemark.edges[0].node.html

  return (
    <ContentBlock title="About Me">
      <span dangerouslySetInnerHTML={{ __html: html }} />
    </ContentBlock>
  )
}

export default AboutPage

export const AboutPageQuery = graphql`
  query AboutPage {
    allMarkdownRemark(filter: { fields: { slug: { eq: "/about/" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`
