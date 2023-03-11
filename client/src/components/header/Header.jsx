
import { AppBar, Toolbar, styled, Button } from '@mui/material'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
  } from "react-icons/fa";
  import { GiHamburgerMenu } from "react-icons/gi";
  import './header.css'


const Header = () => {

    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const navigate = useNavigate();

    const logout = async () => navigate('/account');
        
    return (
        <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
                                    <span sty><b>B</b></span>logging
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <Link to="/" style={{textDecoration:'none'}}>Home</Link>
            </li>
            <li>
              <Link to="/about"style={{textDecoration:'none'}}>about</Link>
            </li>
            
            <li>
              <Link to="/contact"style={{textDecoration:'none'}}>contact</Link>
            </li>
            <li>
              <Link to="/account"style={{textDecoration:'none'}}>Logout</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="#"
                >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="#"
               >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="#"
                target="">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    </>
    )
}

export default Header;