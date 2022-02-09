import React from "react";
import { Counter } from "./features/counter/Counter";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { Fade } from "react-awesome-reveal";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Screens/Footer";
import Header from "./Screens/Header";

function App() {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route exact path="/">
						<Header />
						<HomeScreen />
						<Fade>
							<Footer />
						</Fade>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
