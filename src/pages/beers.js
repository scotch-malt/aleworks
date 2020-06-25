import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import BeerCard from "../components/beercard";
import Img from "gatsby-image";
import "../styles/beers.scss";

const Beers = ({data}) => {
    console.log(data)

    let beers = [];
    data.allMarkdownRemark.edges.forEach((edge, i) => {
      if(edge.node.frontmatter.pagetype === "beer") {
        beers.push(edge)
      }
    })

    let images = [];
    data.allFile.edges.forEach(edge => {
        beers.forEach(item => {
            if (item.node.frontmatter.image === edge.node.base) {
                images.push(<Img fluid={edge.node.childImageSharp.fluid} alt={edge.node.base.split(".")[0]} style={{overflow: "visible", width: "100%"}} />)
            }
        });
    })
    
    
    return (
        <Layout>
            <div className="beers">
                <div className="beers-main">
                    <h1 className="beers-main-title">OUR BEERS</h1>
                    <div className="beers-main-body">
                      {beers.map((beer, i) => {
                          return <BeerCard key={i} beer={beer} images={images} />
                      })}  
                    </div>
                 </div>
            <Footer />
        </div>
        </Layout>
    );
}

export default Beers;

export const pageQuery = graphql`
query beerQuery {
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
  allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        excerpt(pruneLength: 400)
        frontmatter {
          title
          jtitle 
          date 
          tags
          image
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