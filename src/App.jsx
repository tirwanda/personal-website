import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/style.scss';

import Home from 'pages/home/Home';
import Resume from 'pages/resume/Resume';

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/resume" component={Resume} />
					{/* <Route exact path="/about" component={About} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/skills" component={Skills} /> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
