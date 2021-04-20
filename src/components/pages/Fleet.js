import React from "react"
import "./Fleet.scss"
import fleetOne from "../../images/fleet1.png"

const Fleet = () => {
    return(
        <div class="fleet">
            <div class="container">
                <h1 class= "fleet-title" >Discover the fleet.</h1>
            
            <div class="fleet-slide-show">
               
                <div>
                    <i class="fa fa-chevron-left"></i>
                </div>

                <div>
                    <img src={fleetOne} />
                    <p>B5 MAX</p>
                </div>
                <div>
                    <i class="fa fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Fleet 