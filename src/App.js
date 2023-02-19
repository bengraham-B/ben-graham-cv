import './App.css';

import Profile from './components/Profile';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
import WorkExp from './components/WorkExp';
import MadeInReact from './components/MadeInReact';

function App() {
  return (
    <div className="App">

		<dv className="left">
			<Profile/>
			<MadeInReact/>

		</dv>

		<div className="right">
			<About/>

			<div className="qual-skills-container">
				<Qualifications/>
				<Skills/>
			</div>

			<WorkExp/>


		</div>
     
    </div>
  );
}

export default App;
