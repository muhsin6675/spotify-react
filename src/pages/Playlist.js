import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Musicplayer from '../components/Musicplayer'
import '../assets/styles.css'
function Playlist() {
  return (
    <>
        <Sidebar/>
        <div className="main-container">
        <Topbar/>

        <div className="playlist-container">
          <div className="image-container">
            <img src="https://i.scdn.co/image/ab67616d0000b273156f9ab02be895a9be3de100"  width={'200'}  alt=""/>
          </div>
          <div className="image-detail-container">
            <small className="idt-1">Song</small>
            <h1 className="idt-2">Arijith singh Hits</h1>
            <div className="be-container">
              <img src="https://cdn.wionews.com/sites/default/files/2023/08/17/373802-arijit-singh.png?im=FitAndFill=(1200,900)" alt=""  className="billie-img"/>
              <p className="b-name">Arijith singh</p>
              <h4>.</h4>
              <p>Indian tour</p>
              <h4>.</h4>
              <p>2023</p>
              <h4>.</h4>
              <p>3:20</p>
              <h4>.</h4>
              <p>2,052,429,348</p>
            </div>
          </div>
        </div>
        <div className="playlist-content-one">
          <button className="btn-spotify" id="playPauseButton">
            <div className="play">
              <span className="fa fa-play fa-xl" id="playPauseIcon"></span>
            </div>
          </button>
          
          <div className="like-btn">
            <button className="fa-regular fa-heart"></button>
          </div>
          <div className="opt-btn">
            <button className="fa-solid fa-ellipsis"></button>
          </div>
        </div>
        <div className="playlist-content-two">
          <ul className="playlist-header">
            <li>Title</li>
            <li className="alb">Album</li>
            <li>Date added</li>
            <li className="fa fa-clock"></li>
          </ul>
          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://i.scdn.co/image/ab67706c0000da842c84a4a1a61d01c745a1221b" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Chaleya</p>
                <small className="pl-2">anirudh,arijith singh</small>
              </span>
            </li>
            <li>lovely</li>
            <li>2018</li>
            <li className="clock">3.18</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://i.scdn.co/image/ab67616d0000b2732d12261d475f461409cd6d8a" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Satanga(animal)</p>
                <small className="pl-2">arijit,shreyas puranik</small>
              </span>
            </li>
            <li>animal</li>
            <li>2019</li>
            <li className="clock">3.44</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://i.scdn.co/image/ab67616d00001e026485a2a1da68d702f07fd105" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Heeriye(.Arijith)</p>
                <small className="pl-2">Jasleen royal,Arijith</small>
              </span>
            </li>
            <li>adver</li>
            <li>2002</li>
            <li className="clock">3.21</li>
          </ul>


          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://i.scdn.co/image/ab67616d0000b2737569cbe3695608074d9fd389" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Kesariya</p>
                <small className="pl-2">Pritam,Arijith singh</small>
              </span>
            </li>
            <li>movie</li>
            <li>2017</li>
            <li className="clock">3.21</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://i.scdn.co/image/ab67616d00001e02303cbd223d0b5133f41b74bc" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Agar Thum Sath </p>
                <small className="pl-2">Alka Yagnik,Arijith </small>
              </span>
            </li>
            <li>tamasha</li>
            <li>2015</li>
            <li className="clock">3.21</li>
          </ul>
        </div>


        <div className="footer">
          <div className="ft-container">
            <div className="ft-one">
              <ul>
                <li className="ft-header">Company</li>
                <li>About</li>
                <li>Jobs</li>
                <li>For the Record</li>
              </ul>
            </div>
            <div className="ft-one">
              <ul>
                <li className="ft-header">Communities</li>
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li>
              </ul>
            </div>
            <div className="ft-one">
              <ul>
                <li className="ft-header">Useful links</li>
                <li>Support</li>
                <li>For Moble App</li>
              </ul>
            </div>
          </div>
          <div className="icon-container">
            <span className="fa-brands fa-instagram fa-xl"></span>
            <span className="fa-brands fa-twitter fa-xl"></span>
            <span className="fa-brands fa-facebook fa-xl"></span>
          </div>
        </div>

        </div>
        <Musicplayer/>
    </>
  )
}

export default Playlist