import React from "react";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import "../styles/footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            {/* <hr/> */}
            <div className="footer-contents">
                <div className="footer-contents-social">
                    <div className="footer-contents-social-icon">
                        <a href="https://www.facebook.com/TokyoAleworksTaproom/"><img src={Facebook} alt=""/></a>
                    </div>
                    <div className="footer-contents-social-icon">
                        <a href="https://www.instagram.com/tokyoaleworks/"><img src={Instagram} alt=""/></a>
                    </div>
                </div>
                <p>© {new Date().getFullYear()} TOKYO ALEWORKS</p>
            </div>
            
        </div>
    );
}

export default Footer;