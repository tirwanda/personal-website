import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'parts/Header';
import Home from 'pages/Home';
import Resume from 'pages/Resume';
import Portfolio from 'pages/Portfolio';
import Skills from 'pages/Skills';
import './assets/scss/style.scss';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<div className="container">
					<div className="wrapper">
						<div className="home">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route
									exact
									path="/resume"
									component={Resume}
								/>
								<Route
									exact
									path="/portfolio"
									component={Portfolio}
								/>
								<Route
									exact
									path="/skills"
									component={Skills}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
