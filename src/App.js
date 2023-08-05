import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./components/styles/App.css"
import Navigation from "./components/navigation/Navigation.jsx"
import Main from "./components/main/Main"
import AppRouter from "./components/AppRouter"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation />
				<AppRouter />
			</BrowserRouter>
		</div>
	)
}

export default App
