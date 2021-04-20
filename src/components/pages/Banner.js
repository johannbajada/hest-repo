import React from "react"
import "./Banner.scss"
import bannerImg from "../../images/esiimg.png"
import bannerBackground from "../../images/bg-esi.png"

const Banner = () => {
    return (
        <div className="banner" style={{backgroundImage: `url(${bannerBackground})`}}>
            <div className="banner-col-1">
                <img src={bannerImg} />
        </div>

        <div className="banner-col-2">
            <h1>European</h1>
            <h1>Scooter</h1>
            <h1>Import</h1> 
           <h2>electric powered vehicel</h2>
        </div>
    </div>
    )
}


export default Banner