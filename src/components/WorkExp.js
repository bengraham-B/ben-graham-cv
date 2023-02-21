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

        <WorkExpComp title={"July 2017 – July 2017"} text={"Reutech Radar Systems: Assisted in the financial department."}/>
        <WorkExpComp title={"December 2017 – January 2018"} text={"Reutech Radar Systems: Assisted in the financial department."}/>
        <WorkExpComp title={"November 2018 – January 2019"} text={"Reutech Radar Systems: Assisted in the financial department."}/>
        <WorkExpComp title={"November 2020 - January 2021"} text={"Reutech Radar Systems: Assisted in the financial department."}/>
        <WorkExpComp title={"January 2022 - February 2022"} text={"Reutech Radar Systems: Assited in the Mining Department"}/>
        <WorkExpComp title={"July 2022"} text={"Reutech Radar Systems: Auditing of Fixed Assets"}/>
        <WorkExpComp title={"August 2022 - October 2022"} text={"Reutech Radar Systems: "}/>



    </div>
  )
}
