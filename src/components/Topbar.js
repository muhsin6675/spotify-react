import React from 'react'
import '../assets/styles.css'
import { Link } from 'react-router-dom'
function Topbar() {
  return (
    <>
    <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" class="fa fas fa-chevron-left"></button>
          <button type="button" class="fa fas fa-chevron-right"></button>
        </div>

        <div class="navbar">
          <ul>
            <li>
              <a href="#">Premium</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li class="divider">|</li>
            <li>
              <Link to='/signup' >Sign Up</Link>
            </li>
          </ul>
          <Link to='/login' ><button type="button">Log In</button></Link>
        </div>
      </div>
    </>
  )
}

export default Topbar