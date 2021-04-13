import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/foodmenu.scss"

const FoodMenu = ({menu}) => {
    
    const data = useStaticQuery(graphql`
    query foodQuery {
        tastyPizza: file(relativePath: { eq: "tasty_pizza.jpg" }) {
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
                        pagetype
                    }
                }
            }
        }
    }   

`)
    
    const food = []
    data.allMarkdownRemark.edges.forEach(item => {
        if (item.node.frontmatter.pagetype === "food" && menu === item.node.frontmatter.title) {
            food.push(item)
        }
    })

    return (
        <div className="foodmenu">
            <h1 className="foodmenu-title">Food</h1>

            <div className="foodmenu-main">
                <div className="foodmenu-main-list">
                   <div dangerouslySetInnerHTML={{__html: food[0].node.html}} />
                </div>
            </div>
            
        </div>
    );
}

export default FoodMenu;