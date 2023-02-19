import React from 'react'
import '../styles/profile.css'
import gmailIcon from './assets/gmail_icon.png'
import githubIcon from './assets/github_icon.png'

export default function Profile() {
  return (
    <div id="profile-container">
        <h1 id="profile-name">Ben Graham</h1>
        <h4 id="profile-job">Full Stack Developer</h4>

        <hr className="hr"/>

        <div id="profile-location">
            <h3>Cape Town</h3>
            <h4>South Africa</h4>
        </div>

        <hr className="hr"/>

        <div id="profile-contact">

            <div id="contact-container">
                {/* <a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">
                </a> -- This is the link for the icon i used*/} 
                <img id="contact-icon" src={gmailIcon} alt="gmail icon" />
                <p>grahamben7@gmail.com</p>
            </div>
            <div id="contact-container">
                {/* This is the link for the icon i used */}
                {/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a> */}
                <img id="contact-icon" src={githubIcon} alt="gmail icon" />
                <p>
                    <a id="github-link" href="https://github.com/bengraham-B">Github Account</a>
                </p>
            </div>

        </div>

    </div>
  )
}
