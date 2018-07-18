import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Checkboxes} from "./components/Checkboxes/Checkboxes";
import {Inputs} from "./components/Inputs/Inputs";
import {Selects} from "./components/Selects/Selects";
import {MagicSelects} from "./components/MagicSelects/MagicSelects";
import ReactMarkdown from 'react-markdown';

const docs = `
## What Is This?
The goals for this site are to:
* Develop a standard style for [Caldera the Caldera Components library](https://calderalabs.org/caldera-components/) when it is used for Caldera products such as Caldera Forms. This will provide:
  - A visual and annotated reference for our style
  - Provide the CSS to [use with the components library](https://github.com/CalderaWP/caldera-components/issues/11) 
  
## How To Use This App

### For Style Guide Development
This site's source is a [Github repo](https://github.com/CalderaWP/caldera-components-style-guide) every time a commit is made to master, the site is automatically redeployed using [Netlify](https://www.netlify.com/?gclid=EAIaIQobChMI582Q36ep3AIVRkOGCh1w5wwLEAAYASAAEgIcGfD_BwE)

There are a few ways to make changes to CSS:
1) Go to Github editor for the file and change the CSS and commit. Simple, takes awhile to see your changes.
2) Import Github repo to [Glitch](https://glitch.com/about/)
3) Clone repo locally and use local server. See README.md.

#### CSS Files Structure
There is a global css file at /src/App.css that is applied in every page.

For every page, there is a directory in /src/components with the same name that has the JavaScript and CSS file for that page. For example, the page [https://caldera-components-style-guide.calderalabs.org/inputs](https://caldera-components-style-guide.calderalabs.org/inputs) is generated using the files at /src/components/Inputs. The CSS file /src/components/Inputs/style.css is only applied to components on that page.
 

#### CSS Preprocessors
Would probably be very useful

### Using CSS In Other Packages
Pending.

`
const Docs = () => {
	return (
		<ReactMarkdown source={docs}/>
	)
};

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
	},
	{
		path: '/',
		component: Docs
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
					Hi.
				</p>
				<div>
					<Router>
						<nav>
							<ul>
								<li><Link to={'/'}>Home</Link>
								</li>
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
						</nav>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
