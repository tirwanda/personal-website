import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Resume from 'pages/Resume';
import Portfolio from 'pages/Portfolio';
import Skills from 'pages/Skills';
import './assets/scss/style.scss';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/resume" component={Resume} />
					<Route exact path="/portfolio" component={Portfolio} />
					<Route exact path="/skills" component={Skills} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
