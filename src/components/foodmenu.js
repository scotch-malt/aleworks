import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/foodmenu.scss"

const FoodMenu = () => {
    const data = useStaticQuery(graphql`
    query foodQuery {
        file(relativePath: { eq: "taproom_food_1.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    html
                    frontmatter {
                        title
                        jtitle
                        image {
                            childImageSharp {
                              fluid(maxWidth: 800) {
                                ...GatsbyImageSharpFluid
                              }
                            }
                        }
                        brewery
                        location
                        price
                        pagetype
                    }
                }
            }
        }
    }   

`)
    console.log(data)
    const food = []
    data.allMarkdownRemark.edges.forEach(item => {
        if (item.node.frontmatter.pagetype === "food") {
            food.push(item)
        }
    })
    console.log(food)
    return (
        <div className="foodmenu">
            <div className="foodmenu-image">
                <div className="foodmenu-image-wrap">
                    <Img fluid={data.file.childImageSharp.fluid} style={{width: "100%"}} />
                </div>
            </div>
            <div className="foodmenu-list">
              {food.map(item => {
                  return (
                      <div className="foodmenu-list-item">
                          <h1 className="foodmenu-list-item-title">{item.node.frontmatter.title}</h1>
                          <h2 className="foodmenu-list-item-title">{item.node.frontmatter.jtitle}</h2>
                          <div className="foodmenu-list-item-description" dangerouslySetInnerHTML={{__html: item.node.html}} />
                          <small className="foodmenu-list-item-price">¥{item.node.frontmatter.price}</small>
                          <hr/>
                          <br/>
                      </div>
                  )
              })}
            </div>
        </div>
    );
}

export default FoodMenu;