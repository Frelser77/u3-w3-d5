import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./components/NotFound";
// import About from "./components/About";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/about" element={<About />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
};

export default App;
