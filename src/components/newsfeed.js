import React from "react";
import { Link, graphql } from "gatsby";
import "../styles/newsfeed.scss";

const NewsFeed = ({news})=> {
    console.log(news)
    return (
        <div>
            {news.map((item, i) => {
                return (
                    <div key={i} className="newsfeed">
                        <div className="newsfeed-top">
                            <div className="newsfeed-top-thumb">
                                <img src={item.node.frontmatter.image} alt=""/>
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