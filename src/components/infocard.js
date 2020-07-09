import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import "../styles/infocard.scss";

const InfoCard = ({info}) => {
    console.log(info)
    return (
        <div className="infocard">
            <h1 className="infocard-title">Shop Information</h1>
            <div dangerouslySetInnerHTML={{__html: info[0].node.html}} />
        </div>
    );
}

export default InfoCard;
