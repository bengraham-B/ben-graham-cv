import React from 'react'
import '../styles/workexp.css'


const WorkExpComp = (props) => {
  return (
    <div id="work-exp-comp-container">

		<div id="work-exp-comp-title">
			<h3>{props.title}</h3>
		</div>

		<div id="work-exp-comp-text">
			<h4>{props.text}</h4>
		</div>

    </div>
  )
}
export default function WorkExp() {
  return (
    <div id="work-exp-container">

        <div id="work-exp-title-container">
            <h1 id="work-exp-title">Work Experience</h1>
        </div>

        <hr className="hr" />

        <WorkExpComp title={"17 July 2017 – 21 July 2017"} text={"Reutech Radar Systems: Assisted in the financial department."}/>
        <WorkExpComp title={"1 December 2017 – 16 January 2018"} text={"Reutech Radar Systems: Assisted in the financial department."}/>
        <WorkExpComp title={"27 November 2018 – 8 January 2019"} text={"Reutech Radar Systems: Assisted in the financial department."}/>
        <WorkExpComp title={"25 November 2019 - 5 December 2020"} text={"Reutech Radar Systems: Assisted in the financial department."}/>


    </div>
  )
}
