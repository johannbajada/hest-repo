import React from "react"
import "./News.scss"

import logo from "../../images/logo.png"
import news1 from "../../images/news1.png"
import news2 from "../../images/news2.png"
import news3 from "../../images/news3.png"

import NewsCard from "./NewsCard"

const News = () => {
    return (

        <div className="news">
            <div className="container">
                <div className="title">
                    <img src={logo} />
                    <h1 className="title-h1">NEWS</h1>
                </div>

                <div className="news-sections">

                    <NewsCard 
                    src={news1}
                    text= "Hest Company, Board meeting"
                    />

                    <NewsCard 
                    src={news2}
                    text= "Improving our fleet"
                    />

                    <NewsCard src ={news3}
                    text= "Widen Our Connections" />

                </div>
            </div>
        </div>

    )
}

export default News