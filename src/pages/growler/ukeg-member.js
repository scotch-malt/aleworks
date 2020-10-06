import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/growlerlayout"
import SEO from "../../components/seo"
import "../../styles/ukeg-member.scss"

const UkegMember = ({data}) => {
    const posts = data.allMarkdownRemark.edges
    const members = []

    posts.forEach((edge, i) => {
        if (edge.node.frontmatter.pagetype === "member") {
            members.push(edge)
        }
    })

    return (
        <Layout>
          <SEO title={`Ukeg 加盟店情報`} />
            <div className="ukeg-member">
                <div className="ukeg-member-guide">
                    <Link to="/growler/ukeg-howto"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                    <Link to="/growler/ukeg-items"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                    <Link to="/growler/ukeg-maintenance"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                    <Link to="/growler/ukeg-warranty"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                    <Link to="/growler/ukeg-troubleshooting"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                    <Link to="/growler/ukeg-member"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
                </div>
                <div className="ukeg-member-main">
                    <h1 className="ukeg-member-main-title">加盟店情報</h1>
                    <h3 className="ukeg-member-main-tab">店舗案内</h3>
                    {
                        members.map((member, i) => {
                            return (
                                <div className="ukeg-member-main-shop">
                                    <Link to={member.node.fields.slug}>
                                        <h2>{member.node.frontmatter.title}</h2>
                                    </Link>
                                    
                                    <p>{member.node.excerpt}</p>
                                    <Link to={member.node.fields.slug}>
                                        <button className="ukeg-member-main-shop-button">Read more</button>
                                    </Link>
                                    <hr/>   
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default UkegMember

export const pageQuery = graphql`
query membersQuery {
  allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        excerpt(pruneLength: 200)
        frontmatter {
          title 
          date(formatString: "MMMM DD, YYYY") 
          area
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
  
          pagetype
        }
        fields {
          slug
        }
      }
    }
  }
}
`