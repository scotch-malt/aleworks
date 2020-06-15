import React from "react";
import "../styles/footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <hr/>
            <p>© {new Date().getFullYear()} TOKYO ALEWORKS</p>
        </div>
    );
}

export default Footer;