import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Checkboxes} from "./components/Checkboxes/Checkboxes";
import {Inputs} from "./components/Inputs/Inputs";
import {Selects} from "./components/Selects/Selects";
import {MagicSelects} from "./components/MagicSelects/MagicSelects";

const inputsPath = "/inputs";
const selectsPath = "/selects";
const checkboxesPath = "/checkboxes";
const magicSelectsPath = "/selects/magic";
const routes = [
	{
		path: inputsPath,
		component: Inputs,
	},
	{
		path: checkboxesPath,
		component: Checkboxes
	},
	{
		path: "/selects",
		component: Selects,

	},
	{
		path: magicSelectsPath,
		component: MagicSelects
	}
];


const RouteWithSubRoutes = route => (
	<Route
		path={route.path}
		render={props => (
			// pass the sub-routes down to keep nesting
			<route.component {...props} routes={route.routes}/>
		)}
	/>
);


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img
						src={logo}
						className="App-logo"
						alt="logo"
					/>
					<h1 className="App-title">Caldera Components Style Guide </h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<div>
					<Router>
						<div>
							<ul>
								<li>
									<Link to={inputsPath}>Input Fields</Link>
									<ul>
										<li>
											<Link to={checkboxesPath}> Checkbox fieldset</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to={selectsPath}>Select Fields</Link>
									<ul>
										<li>
											<Link to={magicSelectsPath}> Magic Select (Broken)</Link>
										</li>
									</ul>
								</li>
							</ul>
							{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
						</div>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
