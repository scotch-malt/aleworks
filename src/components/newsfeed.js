import React from "react";
import Img from "gatsby-image";
//import si from "../images/smashing_imperialism_label.jpg";
import "../styles/newsfeed.scss";

const NewsFeed = ({news})=> {
    console.log(news.frontmatter.image)
    return (
        <div className="newsfeed">
            <div className="newsfeed-top">
                <div className="newsfeed-top-thumb">
                    <img src={news.frontmatter.image} alt=""/>
                </div>
                <div className="newsfeed-top-heading">
                    <h2>{news.frontmatter.title}</h2>
                    <small>{news.frontmatter.date}</small>
                </div>
            </div>
            <hr/>
            <div className="newsfeed-bottom" dangerouslySetInnerHTML={{__html: news.html}}/>
        </div>
    );
}

export default NewsFeed;