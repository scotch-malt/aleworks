import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../styles/taproomheader.scss";

const TaproomHeader = () => {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "aleworks_logo_2018.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="header">
            <div className="header-contents">
                <Link to="/"> 
                  <div className="header-contents-logo">
                    <Img style={{width: "100%", overflow: "visible"}} fluid={data.file.childImageSharp.fluid} />
                  </div>
                </Link>
                <h1 className="header-contents-title">Itabashi Taproom</h1>
                <div className="header-contents-links">
                    <Link className="header-contents-links-link" to="/brewery">Shop Info</Link>
                    <Link className="header-contents-links-link" to="/beers">Taplist</Link>
                </div>
            </div>

        </div>  
    );
}

export default TaproomHeader;