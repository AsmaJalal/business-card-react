import React from "react"
import Facebook from "../images/facebook.png"
import Twitter from "../images/twitter.png"
import Insta from "../images/insta.png"
import Github from "../images/github.png"

function Footer() {
    return (
        <div className="footer">
            <img src={Twitter} alt="twitter icon" />
            <img src={Facebook} alt="facebook icon" />
            <img src={Insta} alt="instagram icon" />
            <img src={Github} alt="github icon" />
        </div>
    )
}

export default Footer