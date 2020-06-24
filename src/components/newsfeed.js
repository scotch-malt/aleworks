import React from "react";
import { Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../styles/newsfeed.scss";

const NewsFeed = ({news})=> {
    console.log(news)
    const images = []
    const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  //console.log(data.allFile.edges[0].node.base)
  data.allFile.edges.forEach(edge => {
    news.forEach(item => {
        if (item.node.frontmatter.image === edge.node.base) {
            images.push(<Img fluid={edge.node.childImageSharp.fluid} alt={edge.node.base.split(".")[0]} style={{border: "1px solid white"}} />)
        }
    });
  })
  console.log(images)
    return (
        <div>
            {news.map((item, i) => {
                return (
                    <div key={i} className="newsfeed">
                        <div className="newsfeed-top">
                            <div className="newsfeed-top-thumb">
                                {images[2-i]}
                            </div>
                            <div className="newsfeed-top-heading">
                                <Link className="newsfeed-top-heading-link" to={item.node.fields.slug}><h2>{item.node.frontmatter.title}</h2></Link>
                                <small>{item.node.frontmatter.date}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default NewsFeed;