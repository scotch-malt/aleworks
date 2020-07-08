import React from "react";
import Layout from "../components/taproomlayout";
import Footer from "../components/footer";
import InfoCard from "../components/infocard";
import NewsFeed from "../components/newsfeed";
import Taplist from "../components/taplist";
import "../styles/itabashi-taproom.scss";

const ItabashiTaproom = ({data}) => {
    let news = [];
    let info = [];

    data.allMarkdownRemark.edges.forEach((edge, i) => {
      if(edge.node.frontmatter.pagetype === "news" && news.length < 3) {
        news.push(edge)
      }
    })
    data.allMarkdownRemark.edges.forEach((edge, i) => {
      if(edge.node.frontmatter.pagetype === "info" && edge.node.frontmatter.title === "Itabashi Shop Information") {
        info.push(edge)
      }
    })


    return (
       <Layout>
           <div className="itabashi-taproom">
               <div className="itabashi-taproom-main">
                    <div className="itabashi-taproom-main-body">
                        <div className="itabashi-taproom-main-body-info">
                            <InfoCard info={info} />  
                        </div>
                        <div className="itabashi-taproom-main-body-social">
                            <InfoCard info={info} />
                        </div>
                    </div>
                    <div className="itabashi-taproom-main-news">
                    <h1 id="taplist">Today's Beers</h1>
                      <Taplist />
                      
                    </div>
               </div>
               <Footer />
           </div>
       </Layout>
    );
}

export default ItabashiTaproom;

export const pageQuery = graphql`
query itabashiTaproomQuery {
  file(relativePath: { eq: "TAW_logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
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
          date 
          tags
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