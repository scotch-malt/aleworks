import React from "react";
import "../styles/beercard.scss";

const BeerCard = ({beer, images}) => {
    console.log(images)
    console.log(beer)
    let imglabel;
    images.forEach(image => {
      if(image.props.alt === beer.node.frontmatter.image.split(".")[0]) {
          imglabel = image;
      }  
    })



    return (
        <div className="beercard">
            <div className="beercard-image">
                {imglabel}
            </div>
            <div className="beercard-heading">
                <h2 className="beercard-heading-title">{beer.node.frontmatter.title}</h2>
                <h3 className="beercard-heading-jtitle">{beer.node.frontmatter.jtitle}</h3>
            </div>
            <hr/>
            <div className="beercard-description" dangerouslySetInnerHTML={{__html: beer.node.html}} />
            <hr/>
        </div>
    );
}

export default BeerCard;