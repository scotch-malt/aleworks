import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import NewsFeed from "../components/newsfeed";
import Slogan from "../images/TAW_logo.png"
import Img from "gatsby-image";
import "../styles/index.scss";
import "typeface-rubik";

const Index = ({data}) => {
    let news = data.allMarkdownRemark.edges
    console.log(data)
    return (
        <Layout>
            <div className="index">
                <div className="index-main">
                  {/* <div className="index-main-image">
                      <img src={Slogan} alt=""/>
                  </div> */}
                  <Img style={{width: "600px"}}
                    fluid={data.file.childImageSharp.fluid}
                    alt="A corgi smiling happily"
                  />
                  <div className="index-main-card">
                    <h1>THE LATEST NEWS</h1>
                    <NewsFeed news={news} />
                    <div className="index-main-card-links">
                      <a href="https://www.saketry.com/tokyoaleworks.html" target="_blank" rel="noopener noreferrer"><button>BUY OUR BEER ONLINE</button></a>
                      <a><button>DRINK AT OUR TAPROOMS</button></a>   
                    </div>
                  </div>   
                </div>
                <Footer />
            </div> 
        </Layout>
    );
}

export default Index;

export const pageQuery = graphql`
query indexQuery {
  file(relativePath: { eq: "TAW_logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        html 
        excerpt(pruneLength: 400)
        frontmatter {
          title 
          date 
          tags
          image
        }
        fields {
          slug
        }
      }
    }
  }
}
` 