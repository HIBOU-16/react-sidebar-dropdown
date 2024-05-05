// Filename - App.js

import "./App.css";
import Sidebar from "./components/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	Nmap,
	NmapOne,
	NmapTwo,
} from "./pages/Nmap";
import {
	Vuln,
	VulnOne,
	VulnTwo,
	VulnThree,
} from "./pages/Vuln";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import AllOutput from "./pages/AllOutput";
import SignIn from "./pages/SignIn"

function App() {
	return (
		<h1><Dashboard /></h1>
	);
}

export default App;
