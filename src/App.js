import React from "react"
import AppRouter from "./components/AppRouter"
import { BrowserRouter } from "react-router-dom"
import { createContext } from "react"
import "./components/styles/App.css"
import data from "./data.json"

export const DataContext = createContext({})

function App() {
	const store = data

	return (
		<DataContext.Provider value={store}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</DataContext.Provider>
	)
}

export default App
