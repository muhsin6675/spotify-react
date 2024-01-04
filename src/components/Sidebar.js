import React from 'react'
import '../assets/styles.css'
import img from '../assets/images/green.png'
import img1 from '../assets/images/privacy.png'

function Sidebar() {
  return ( 
    <>
        <div className="sidebar">
            <div className="logo-container">
                <div className="logo">
                <a href="#">
                    <img src={img} alt="Logo" className="spotifylogo"/>
                </a>
                </div>
                <div className="navigation">
                <ul>
                    <li>
                        <a href="" className="home">
                            <span className="fa-solid fa-house fa-xl"></span>
                            <span className="hometext">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="home">
                            <span className="fa-solid fa-search fa-xl"></span>
                            <span className="searchtext">Search</span>
                        </a>
                    </li>
                </ul>
                </div>
                <div className="library-container">
                    <div className="library">
                        <ul>
                        <li>
                            <a href="" className="home">
                            <span className="fa-solid fa-book fa-xl lib"></span>
                            <span className="libtext">Your Library</span>
                            </a>
                            <button className="plusbtn"><span className="fa-thin fa-plus fa-2xl"></span></button>
                        </li>
                        </ul>
                        <div className="scroll-text">
                            <div className="scroll-first-container">
                            <p className="scroll-header">Create your first playlist</p>
                            <p className="s-t">Its easy, we'll help you</p>
                            <button className="btn-createplaylist">Create Playlist</button>
                            </div>

                            <div className="scroll-second-container">
                            <p className="scroll-header-two">Let's find some podcasts to follow</p>
                            <p className="s-t-2">We'll keep you updated on new episodes</p>
                            <button className="btn-createpodcast">Browse podcasts</button>
                            </div>
                        </div>
                        <div className="list-items">
                        <ul>
                            <li className="lists">
                            <span>Legal</span>
                            <span>Privacy Center</span>
                            <span>Privacy Policy</span>
                            </li>
                            <li className="lists">
                            <span>Cookies</span>
                            <span>About Us</span>
                            <span>Accessibility</span>
                            </li>
                            <li className="lists">
                            Notice at Collection
                            </li>
                            <li className="lists">
                            <span>Your Privacy Choices</span>
                            <span><img src={img1} alt="" className='privacy-icon'/></span>
                            </li>
                            <li className="lists">
                            Cookies
                            </li>
                            <li className="lists">
                            <button className="eng">
                                <span className="fa-solid fa-globe"></span>
                                <span className="eng-text">English</span>
                            </button>
                            </li>
                        </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar