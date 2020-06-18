import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import NewsFeed from "../components/newsfeed";
import Slogan from "../images/TAW_logo.png"
import "../styles/index.scss";
import "typeface-rubik";

const Index = ({data}) => {
    let news = data.allMarkdownRemark.edges
    //console.log(news)
    return (
        <Layout>
            <div className="index">
                <div className="index-main">
                  <div className="index-main-image">
                      <img src={Slogan} alt=""/>
                  </div>
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