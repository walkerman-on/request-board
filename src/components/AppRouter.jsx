import React from "react"
import { Routes, Route } from "react-router-dom"
import { privateRoutes } from "./router/routes.js"

const AppRouter = () => {
	return (
		<Routes>
			{privateRoutes.map((route) => (
				<Route path={route.path} element={route.element} key={route.path} />
			))}
		</Routes>
	)
}

export default AppRouter
