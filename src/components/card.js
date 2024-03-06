import React from "react"
import Headshot from "../images/headshot.png"
import Mail from "../images/mail.png"
import Linkedin from "../images/linkedin.png"
import About from "./about"
import Footer from "./footer"


function Card() {
    return (
        <div className="info">
            <img src={Headshot} alt="headshot" />
            <h1>Nabeela Shaeen</h1>
            <div className="job-title">Software Developer</div>
            <div className="website">github.com/asmas</div>
            <div className="buttons">
                <button id="email"><img src={Mail} alt="mail"></img>Email</button>
                <button id="linkedin"><img src={Linkedin} alt="linkedin"></img>LinkedIn</button>
            </div>

            <About />
            <Footer />
        </div>
    )
}

export default Card