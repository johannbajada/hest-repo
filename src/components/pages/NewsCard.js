import React from "react"
import "./NewsCard.scss"


const NewsCard = (props) => {

    return(
        <div className="news-col">
            <img src={props.src} className="news-col-img" />
                <h2>{props.text}</h2>
                <p className="read-more">Read more</p>
        </div>       
    )    
}

export default NewsCard