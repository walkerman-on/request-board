import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./components/styles/App.css"
import Navigation from "./components/navigation/Navigation.jsx"
import AppRouter from "./components/AppRouter"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
	return (
		<BrowserRouter>
			{/* <Navigation /> */}
			{/* <div className={"menu container"}> */}
			{/* <Sidebar /> */}
			<AppRouter />
			{/* </div> */}
		</BrowserRouter>
	)
}

export default App
