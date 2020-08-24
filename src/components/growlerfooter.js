import React from "react";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";
import "../styles/footer.scss";

const GrowlerFooter = () => {
    return (
        <div className="footer">
            <hr/>
            <div className="footer-contents">
                <div className="footer-contents-social">
                    <div className="footer-contents-social-icon">
                        <a href="https://www.facebook.com/TokyoAleworksTaproom/"><img src={Facebook} alt="" style={{border: "1px solid transparent"}}/></a>
                    </div>
                    <div className="footer-contents-social-icon">
                        <a href="https://www.instagram.com/tokyoaleworks/"><img src={Instagram} alt="" style={{border: "1px solid transparent"}}/></a>
                    </div>
                </div>
                <p style={{color: "black"}}>© {new Date().getFullYear()} TOKYO ALEWORKS</p>
            </div>
            
        </div>
    );
}

export default GrowlerFooter;