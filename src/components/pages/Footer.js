import React from "react"
import "./Footer.scss"
import logoBw from "../../images/bwlogo.png"

const Footer = () => {
    return(
        <footer>
            <div className="container">            
                <div className="footer-section">
                    <div className="footer-sec-1">
                        <div>
                            <img src={logoBw} id="logobw" />
                                    <div className="footer-sec-1-flex">
                                        <div clasName="footer-sec-1-col-1">
                                            <a><p>Home</p></a>
                                            <a><p>Scooters</p></a>
                                            <a><p>Company</p></a>
                                            <a><p>Buying Guide</p></a>
                                            <a><p>Dealers</p></a>
                                        </div>
                                        <div className="footer-sec-1-col-2">
                                            <a><p>News</p></a>
                                            <a><p>Language</p></a>
                                            <a><p>Location</p></a>
                                            <a><p>FAQ</p></a>
                                        </div>
                                    </div>
                                </div>
                        
                            </div>

                            <div className="footer-sec-2">
                                <div className="footer-sec-2-col-1">
                                    <h3>Scooters</h3>
                                    <a><p>CE cool 12V</p></a>
                                    <a><p>CE cool 28V</p></a>
                                    <a><p>B5 MAX</p></a>
                                    <a><p>Road-runner</p></a>
                                    <a><p>Road-runner X1</p></a>
                                    <a><p>CE 320V</p></a>
                                </div>
                                <div className="footer-sec-2-col-2">
                                    <h3>Legal</h3>
                                    <a><p>Privacy</p></a>
                                    <a><p>Terms of Service</p></a>
                                    <a><p>MPG Disclaimer</p></a>
                                    <a><p>Accessibility</p></a>
                                    <a><p>Receive Updates</p></a>
                                </div>
                            </div>
                        </div>

                        <p >Design and Develop: Johann </p>
                        <p > @ 2020 Hest company Ltd.</p>

                    </div>
                </footer>
    )
}

export default Footer