import React from "react"
import "./Nav.scss"
import logo from "../../images/logo.png";

const Nav = () => {
    return(
        <div>
        <div className="wide-container">
                 <div className="info-links">
                     <a src="#">EN</a>
                     <a src="#">Location</a>
                     <a src="#">FAQ</a>
                 </div>
                </div>

            <div className="container">
                 <nav>
                     <a href="#"><img src= {logo} className="logo" alt="logo" /> </a>
                     <a href="#">HOME</a>
                     <a href="#">SCOOTER</a>
                     <a href="#">COMPANY</a>
                     <a href="#">BUYING GUIDE</a>
                 </nav>
             </div>

             </div>
    )

}

export default Nav