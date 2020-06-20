import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Logo from "../images/aleworks_logo_2018.png";
import MobileLogo from "../images/aleworks90.png"
import Slogan from "../images/slogan200.png";
import MobileSlogan from "../images/slogan90.png";
import "../styles/header.scss";

const Header = () => {
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
                {/* <div className="header-contents-logo">
                    <Link to="/"><img className="header-contents-logo-desktop" src={Logo} alt=""/> </Link>  
                </div> */}
                <Img style={{width: "178px", overflow: "visible"}} fluid={data.file.childImageSharp.fluid} />
                <Link className="header-contents-link" to="#">Beers</Link>
                <Link className="header-contents-link" to="#">Brewery</Link>
                <Link className="header-contents-link" to="#">Taprooms</Link>  
            </div>

        </div>
    );
}

export default Header;