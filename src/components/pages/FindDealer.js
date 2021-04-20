import React from "react"
import "./FindDealer.scss"
import logoIcon from "../../images/logoicon.png"
import dealerImg from "../../images/dealerimg.png"
import findDealerBg from "../../images/dealer-bg.png"

const FindDealer = () =>{
    return(
        <div className="find-dealer" style= {{backgroundImage: `url(${findDealerBg})`}}>
            <div className="container">              
                <h1 className="find-dealer-title">Find a dealer </h1> 
        
                <div className="find-par-1">
                    <div className="find-par-1-1">
                        <img src={logoIcon} />
                    </div>
                    <div className="find-par-1-2">
                        <p>Dynamic, contemporary, practical: the station wagon with 
                        class-leading trunk space. corper suscipit lobortis nisl 
                        commodo consequat. DuisDynamic, contemporary, practical: 
                        class-leading trunclass-leading trunk space. corper suscipit lobortis nisl 
                        commodo consequat.k space. corper suscipit lobortis nisl 
                        commodo consequat. Duis autem  </p>
                    <button>Learn more</button>
                    </div>
                </div>
                            
                <div className="find-par-2">
                    <div className="find-par-2-1">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt 
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci 
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum 
                        iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugia                                nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum z
                        zril delenit augue duis dolore te feugait nulla facilisi.
                        </p>
                    </div>
                    <div className="find-par-2-2">
                        <img src={dealerImg} />
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default FindDealer