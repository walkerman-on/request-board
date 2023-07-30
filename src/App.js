import React from "react"
import "./components/styles/App.css"
import Navigation from "./components/navigation/Navigation.jsx"
import Main from "./components/main/Main"

function App() {
	return (
		<div className="App">
			<Navigation />
			<Main />
		</div>
	)
}

export default App
