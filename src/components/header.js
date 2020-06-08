import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo200.png";
import MobileLogo from "../images/aleworks90.png"
import Slogan from "../images/slogan200.png";
import MobileSlogan from "../images/slogan90.png";
import "../styles/header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <div className="header-contents-logo">
                    <img className="header-contents-logo-desktop" src={Logo} alt=""/>
                    <img className="header-contents-logo-mobile" src={MobileLogo} alt=""/>
                </div>
                <div className="header-contents-links">
                    <Link className="header-contents-links-link" to="#">Beers</Link>
                    <Link className="header-contents-links-link" to="#">Brewery</Link>
                    <Link className="header-contents-links-link" to="#">Taprooms</Link>  
                </div>
                <div className="header-contents-slogan">
                    <img className="header-contents-slogan-desktop" src={Slogan} alt=""/>
                    <img className="header-contents-slogan-mobile" src={MobileSlogan} alt=""/>
                </div>
            </div>
            <div className="header-mobilelinks">
                <Link className="header-contents-links-link" to="#">Beers</Link>
                <Link className="header-contents-links-link" to="#">Brewery</Link>
                <Link className="header-contents-links-link" to="#">Taprooms</Link>
            </div>    
        </div>
    );
}

export default Header;