import React from "react";
import "../styles/newsfeed.scss";

const NewsFeed = ({news})=> {
    console.log(news.frontmatter.image)
    return (
        <div className="newsfeed">
            <div className="newsfeed-top">
                <img width="100px" className="newsfeed-top-thumb" src={news.frontmatter.image} alt=""/>
                <div className="newsfeed-top-heading">
                    <h2>{news.frontmatter.title}</h2>
                    <small>{news.frontmatter.date}</small>
                </div>
                <hr/>
                <div dangerouslySetInnerHTML={{__html: news.html}}/>
            </div>

        </div>
    );
}

export default NewsFeed;