import React from 'react'
import { ReactComponent as Github } from "./svg/github.svg";



const Footer = () => {
    return (
        <footer>
            <p className="secondary">Javier Serna</p>
            <a
                className="git_link"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
            >
                <Github
                    className="github"
                    style={{ width: `20px`, height: `20px` }}
                />
             GITHUB
            </a>
        </footer>
    )
}

export default Footer;