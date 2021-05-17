import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Header from 'parts/Header';
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

function Resume() {
	return <p>Discover our numerous opportunities</p>;
}

function Portfolio() {
	return <p>Solutions that help you.</p>;
}

function Skills() {
	return <p>Feel free to reach us.</p>;
}

export default App;
