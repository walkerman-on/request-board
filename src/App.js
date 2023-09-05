import React from "react"
import AppRouter from "./components/AppRouter"
import { BrowserRouter } from "react-router-dom"
import { createContext } from "react"
import "./components/styles/App.css"

function App() {
	const DataContext = createContext()
	const name = "Alex"

	return (
		<DataContext.Provider value={name}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</DataContext.Provider>
	)
}

export default App
