import React from 'react'
import logo from "../../assets/logo.png.png";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Header.css"

const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
            </ul>
        </nav>

        <div className="social-icons">
            <a href="#" className="youtube">
            <FaYoutube />
            </a>
              <a href="#" className="instagram">
            <FaInstagram />
            </a>
              <a href="#" className="facebook">
            <FaFacebook />
            </a>
              <a href="#" className="linkedin">
            <FaLinkedin />
            </a>
        </div>
    </header>
  )
}

export default Header;