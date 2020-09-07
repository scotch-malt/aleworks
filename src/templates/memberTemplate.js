import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/growlerlayout"
import Img from "gatsby-image"
import "../styles/member.scss"

const Member = ({data}) => {
    const post = data.markdownRemark
    console.log(post)
    return (
        <Layout>
            <div className="member">
                <div className="member-guide">
                    <Link to="/growler/ukeg-howto"><span className="ukeg-desc-guide-arrow">&#62;</span> UKEGの使い方</Link>
                    <Link to="/growler/ukeg-items"><span className="ukeg-desc-guide-arrow">&#62;</span> 各部の名称</Link>
                    <Link to="/growler/ukeg-maintenance"><span className="ukeg-desc-guide-arrow">&#62;</span> メンテナンス</Link>
                    <Link to="/growler/ukeg-warranty"><span className="ukeg-desc-guide-arrow">&#62;</span> 保証規定</Link>
                    <Link to="/growler/ukeg-troubleshooting"><span className="ukeg-desc-guide-arrow">&#62;</span> よくあるご質問</Link>
                    <Link to="/growler/ukeg-member"><span className="ukeg-desc-guide-arrow">&#62;</span> 加盟店情報</Link>
                </div>
                <div className="member-main">
                    <div className="member-main-area">
                        <small className="member-main-area-text">エリア:</small>
                        <small>{post.frontmatter.area}</small>
                    </div>
                    <h2>{post.frontmatter.title}</h2>
                    <div className="member-main-image">
                        <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
                    </div>
                    <div className="member-main-body" dangerouslySetInnerHTML={{__html: post.html}} />
                </div>
            </div>
        </Layout>
    )
}

export default Member

export const pageQuery = graphql`
query memberQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html 
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
        }
    }
}
`

