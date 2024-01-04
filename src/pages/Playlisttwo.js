import React from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import Musicplayer from '../components/Musicplayer'
import '../assets/styles.css'

function Playlisttwo() {
  return (
    <>
        <Sidebar/>
        <div className="main-container">
        <Topbar/>

        <div className="playlist-container1">
          <div className="image-container">
            <img src="https://i.scdn.co/image/ab6775700000ee851e3d9789cb05d4072b6eb4fb" alt=""/>
          </div>
          <div className="image-detail-container">
            <small className="idt-1">Best Hits</small>
            <h1 className="idt-2">Alan Walker</h1>
            <div className="be-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkUg1kMyQ1hy_5xI4fs8K-6iXpuWTaruCJQ&usqp=CAU" alt=""  class="billie-img"/>
              <p className="b-name">Faded</p>
              <h4>.</h4>
              <p>Most Listened</p>
              <h4>.</h4>
              <p>2017</p>
              <h4>.</h4>
              <p>3:20</p>
              <h4>.</h4>
              <p>2,000,429,348</p>
            </div>
          </div>
        </div>
        <div className="playlist-content-one">
          <button className="btn-spotify">
            <div className="play">
              <span className="fa fa-play fa-xl"></span>
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
              <img src="https://m.media-amazon.com/images/M/MV5BZTUyYWI4Y2EtZGQ2MC00NDNiLTg3N2UtMWMwY2I1ZTViYzA4XkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_.jpg" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Faded</p>
                <small className="pl-2">Alan walker</small>
              </span>
            </li>
            <li>Isak</li>
            <li>2015</li>
            <li className="clock">3.18</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUtR63AGOgWUXm6DuptGMUOvlrDCIk_mx0aXgroKD8z0L3Zy4F4ewiBZz7R3PjgXVIYM&usqp=CAU" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Lost Control</p>
                <small className="pl-2">Alan walker</small>
              </span>
            </li>
            <li>trevor</li>
            <li>2017</li>
            <li className="clock">3.44</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://i1.sndcdn.com/artworks-000228531849-tfw01d-t500x500.jpg" alt=""/>
              <span className="pl-text">
                <p className="pl-1">I dont wana Go</p>
                <small className="pl-2">Alan walker</small>
              </span>
            </li>
            <li>Sorana</li>
            <li>2018</li>
            <li className="clock">3.21</li>
          </ul>


          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://wallpapercave.com/wp/wp4645774.jpg" alt=""/>
              <span className="pl-text">
                <p className="pl-1">Perfect</p>
                <small className="pl-2">Alan walker</small>
              </span>
            </li>
            <li>Julie bergen</li>
            <li>2019</li>
            <li className="clock">3.21</li>
          </ul>

          <ul className="playlist-inner">
            <li className="playlist-img">
              <img src="https://f4.bcbits.com/img/a3619291635_65" alt=""/>
              <span className="pl-text">
                <p className="pl-1">sorry</p>
                <small className="pl-2">Alan walkerr</small>
              </span>
            </li>
            <li>k-391</li>
            <li>2020</li>
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

export default Playlisttwo