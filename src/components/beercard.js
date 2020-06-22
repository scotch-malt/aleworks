import React from "react";
import "../styles/beercard.scss";

const BeerCard = ({beer, image}) => {
    return (
        <div className="beercard">
            <div className="beercard-image">
                {image}
            </div>
            <h2 className="beercard-title">{beer.node.frontmatter.title}</h2>
            <h3 className="beercard-jtitle">{beer.node.frontmatter.jtitle}</h3>
        </div>
    );
}

export default BeerCard;