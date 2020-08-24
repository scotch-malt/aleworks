import React from "react"
import Img from "gatsby-image"
import "../styles/growlercard.scss"

const GrowlerCard = ({img, type, color, volume, size, weight, accessories, url}) => {
    
    return (
        <div className="growlercard">
            <div className="growlercard-image">
                <Img fluid={img.childImageSharp.fluid} />
            </div>
            <div className="growlercard-specs">
                <h3>{`UKEG${type}`} ({color})</h3>
                <p className="growlercard-specs-product">{volume}</p>
                <p className="growlercard-specs-product">{size}</p>
                <p className="growlercard-specs-product">{weight}</p>
                <p className="growlercard-specs-product">{accessories}</p>
                <a href={url} target="_blank" rel="noopener noreferrer"><button>詳細を見る</button></a>
            </div>
            
        </div>
    )
}

export default GrowlerCard