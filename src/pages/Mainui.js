import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Preview from '../components/Preview'
import '../assets/styles.css'
function Mainui() {
  return (
    <>
      
        <Sidebar/>
        <div className="main-container">
        <Topbar/>

        <div className="spotify-playlists">
          
          <div className="show-all">
            <h2>Spotify Playlists</h2>
            <span >
              <a href="showall.html" className="showall-link">Show all</a>
            </span>
          </div>
          
    
          <div className="list">
            <div className="item">
              <img src="https://i.scdn.co/image/ab67616d00001e0295067fdf365803513c949fe5"  height={'140'}/>
              <div className="play">
                <Link to='/playlist'><span class="fa fa-play" ></span></Link>
              </div>
              <h4>Chaleya</h4>
              <p>Arijith singh Hits</p>
            </div>
    
            <div class="item">
              <img src="https://i.scdn.co/image/ab67616d00001e02bacf3a471ccb6a10bc606f42" />
              <div class="play">
                <Link to='/playlisttwo'><span className="fa fa-play"></span></Link>
              </div>
              <h4>Alan Walker</h4>
              <p>Latest Blockbusters</p>
            </div>
    
            <div className="item">
              <img src="https://routenote.com/blog/wp-content/uploads/2023/02/10.-Justin-Bieber.jpeg" />
              <div className="play">
                <a href="./badguy.html"><span className="fa fa-play"></span></a>
              </div>
              <h4>Justin bieber</h4>
              <p>Top tracks</p>
            </div>
    
            <div className="item">
              <img src="https://routenote.com/blog/wp-content/uploads/2023/02/7.-Eminem.jpeg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Not Afraid</h4>
              <p>Eminems most Listened Songs</p>
            </div>
    
            <div className="item">
              <img src="https://routenote.com/blog/wp-content/uploads/2023/02/5.-Billie-Eilish.jpeg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>What was i made for</h4>
              <p>From the movie barbie</p>
            </div>
    
          </div>
        </div>

        <div className="spotify-playlists">
          <h2>Focus</h2>
          <div className="list">
            <div className="item">
              <img src="https://routenote.com/blog/wp-content/uploads/2023/02/6.-Drake.jpeg"  height={'140'}/>
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>Drake</h4>
              <p>First Person Shooter,feat.j.cole</p>
            </div>
    
            <div className="item">
              <img src="https://routenote.com/blog/wp-content/uploads/2023/02/9.-The-Weeknd.jpeg" />
              <div className="play">
                <span className="fa fa-play"></span>
              </div>
              <h4>The Weekend</h4>
              <p>Die for you</p>
            </div>
    
          </div> 
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

        <hr/>

        <div className="copy-right">
          <p className="cr-text">@2023 Spotify AB</p>
        </div>
    </div>
        <Preview/>
    </>
  )
}

export default Mainui