import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

import About from './About';
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
					</Switch>
				</Router>
			</div>
		);
	}
}
