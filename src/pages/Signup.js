import React from 'react'
import '../assets/styles.css'

function Signup() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
            <img src="./IMAGES/green.PNG" alt=""  className="spotifylogo"/>
        </div>
      </div>
    <div className="main-content">
        <div className="centercontainer">
            <p className="center-header">Sign up to start listening</p>
            <form action=""className="formcontainer">
                <label for="email" className="mail-label">Email address</label>
                <input type="email" id="email" placeholder="name@domain.com" className="mail-input"/>
            </form>
            <a href="" className="phn-link">Use phone number instead.</a>
            <button className="btn-next">Next</button>
            <div className="line-container">
                <div className="line"></div>
                <div className="centered-text">or</div>
                <div className="line"></div>
            </div>
            <a href="">
                <button className="google-btn">
                    <span className="g-i"><img src="./IMAGES/google-icon.png" width="20px" height="20px"/></span>
                    <span className="google-text">Sign up with Google</span>
                </button>
            </a>
            <a href="">
                <button className="fb-btn">
                    <span className="f-i"><img src="./IMAGES/fB.PNG" width="25px" /></span>
                    <span className="fb-text">Sign up with Facebook</span>
                </button>
            </a>

            <div className="line-hr"></div>
        
            <p className="already">Already have an account? <a href="" className="al-link">Login here</a></p>
                <br/>
            <small class="final-text">This site is protected by reCAPTCHA and the Google <br/> 
                <a href="" className="f-link">Privacy Policy</a> and 
                <a href="" className="f2-link">Terms of Service</a> apply.
            </small>
        </div>
        
    </div>
          

    </>
  )
}

export default Signup