import React from "react";
import { Link } from "gatsby";
import Logo from "../images/logo200.png";
import Slogan from "../images/slogan200.png"
import "../styles/header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <div className="header-contents-logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="header-contents-links">
                    <ul>
                        <li>Beers</li>
                        <li>Brewery</li>
                        <li>Taprooms</li>
                    </ul>
                </div>
                <div className="header-contents-slogan">
                    <img src={Slogan} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Header;