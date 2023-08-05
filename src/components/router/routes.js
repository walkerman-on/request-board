import React from "react"
import Login from "../pages/Login.jsx"
import WorkGroup1 from "../pages/WorkGroup1.jsx"
import WorkGroup2 from "../pages/WorkGroup2.jsx"
import WorkGroup3 from "../pages/WorkGroup3.jsx"
import Home from "../pages/Home/Home.jsx"

export const privateRoutes = [
	{ path: "/home", element: <Home /> },
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/workgroup1", element: <WorkGroup1 /> },
	{ path: "/workgroup2", element: <WorkGroup2 /> },
	{ path: "/workgroup3", element: <WorkGroup3 /> },
]
