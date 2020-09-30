import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../styles/newsfeed.scss";

const NewsFeed = ({news})=> {
    const taw = useStaticQuery(graphql`
      query tawQuery {
        logo: file(relativePath: { eq: "TAW_logo.png" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        school: file(relativePath: { eq: "school.jpg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    console.log(taw)
    return (
        <div>
            {news.map((item, i) => {
                return (
                    <div key={i} className="newsfeed">
                        <div className="newsfeed-top">
                            <div className="newsfeed-top-thumb">
                                <Img fluid={item.node.frontmatter.image ? item.node.frontmatter.image.childImageSharp.fluid : taw.logo.childImageSharp.fluid} alt={item.node.frontmatter.title} style={{ width: "90px"}}/>
                            </div>
                            <div className="newsfeed-top-heading">
                                <Link className="newsfeed-top-heading-link" to={item.node.fields.slug}><h2>{item.node.frontmatter.title}</h2></Link>
                                <small>{item.node.frontmatter.date}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="newsfeed">
                <div className="newsfeed-top">
                    <div className="newsfeed-top-thumb">
                        <Img fluid={taw.school.childImageSharp.fluid} alt="体験醸造募集" style={{ width: "90px"}}/>
                    </div>
                    <div className="newsfeed-top-heading">
                        <Link className="newsfeed-top-heading-link" to="/brewery"><h2>体験醸造募集</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsFeed;