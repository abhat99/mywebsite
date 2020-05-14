import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import About from './About';
import Experience from './Experience';
import Projects from './Projects';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<About />
							)}
						/>
						<Route
							path="/about"
							render={() => (
								<About />
							)}
						/>
						<Route
							path="/projects"
							render={() => (
								<Projects />
							)}
						/>
						<Route
							path="/experience"
							render={() => (
								<Experience />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}
