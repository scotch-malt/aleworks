import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Footer from "../components/footer";
import NewsFeed from "../components/newsfeed";
import "../styles/index.scss";
import "typeface-rubik";

const Index = ({data}) => {
    let news = data.allMarkdownRemark.edges[0].node
    //console.log(news)
    return (
        <Layout>
            <div className="index">
                <div className="index-main">
                    <NewsFeed news={news} />
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