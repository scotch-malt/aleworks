import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../styles/newsfeed.scss";

const NewsFeed = ({news})=> {

    return (
        <div>
            {news.map((item, i) => {
                return (
                    <div key={i} className="newsfeed">
                        <div className="newsfeed-top">
                            <div className="newsfeed-top-thumb">
                                <Img fluid={item.node.frontmatter.image.childImageSharp.fluid} alt={item.node.frontmatter.title} style={{border: "1px solid white"}}/>
                            </div>
                            <div className="newsfeed-top-heading">
                                <Link className="newsfeed-top-heading-link" to={item.node.fields.slug}><h2>{item.node.frontmatter.title}</h2></Link>
                                <small>{item.node.frontmatter.date}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default NewsFeed;