import React from "react";
import "../styles/infocard.scss";

const InfoCard = ({info}) => {
    console.log(info)
    return (
        <div className="infocard">
            <div className="infocard-top">
                <h1 className="infocard-top-title">Shop Information</h1>
                <div className="infocard-top-info" dangerouslySetInnerHTML={{__html: info[0].node.html}} />
            </div>
            <div className="infocard-bottom">
                <div dangerouslySetInnerHTML={{__html: info[1].node.html}} />    
            </div> 
        </div>
    );
}

export default InfoCard;
