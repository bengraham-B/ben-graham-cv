import React from 'react'
import '../styles/skills.css'

export default function Skills() {
  return (
    <section id="section-container">
        <div id="skills-title-container">
            <h1 id="skills-title">Software Skills</h1>
        </div>

        <hr className="hr" />

        <div id="skills-list-container">
			<div id="skills-list-container-left">
				<ul>
					<li>Javascript</li>
					<li>ReactJS</li>
					<li>MondoDB</li>
					<li>Next.js</li>
					<li>ExpressJS</li>
				</ul>

				
			</div>
			
			<div id="skills-list-container-right">

				<ul>
					<li>Python</li>
					<li>ReactJS</li>
					<li>MondoDB</li>
					<li>Next.js</li>
					<li>ExpressJS</li>
				</ul>

			</div>

        </div>
    </section>
  )
}
