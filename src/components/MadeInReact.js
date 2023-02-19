import React from 'react'
import '../styles/made-in-react.css'
import githubIcon from './assets/github_icon.png'


export default function MadeInReact() {
  return (
    <div id="made-in-react-container">

        <div id="made-in-react-title-container">
            <h1 id="made-in-react-title">Made In ReactJS</h1>
        </div>

        <div id="made-in-react-text-container">
			<p id="made-in-react-text">
				This CV website was made with a ReactJS
				front end and the source code can be found
				at the github repo.
			</p>
        </div>

		<hr className="hr"/>

		<div id="made-in-react-github-link-container">
			 {/* This is the link for the icon i used */}
			{/* <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a> */}
			<img id="made-in-react-contact-icon" src={githubIcon} alt="gmail icon" />
			<p>
				<a id="github-link" href="https://github.com/bengraham-B/ben-graham-cv">Github Account</a>
			</p>

		</div>


    </div>
  )
}
