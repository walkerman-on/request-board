import React from "react"
import Login from "../pages/Login.jsx"
import WorkGroup1 from "../pages/WorkGroup1.jsx"
import WorkGroup2 from "../pages/WorkGroup2.jsx"
import WorkGroup3 from "../pages/WorkGroup3.jsx"

export const privateRoutes = [
	{ path: "/", element: <WorkGroup1 /> },
	{ path: "/login", element: <Login /> },
	{ path: "/workgroup1", element: <WorkGroup1 /> },
	{ path: "/workgroup2", element: <WorkGroup2 /> },
	{ path: "/workgroup3", element: <WorkGroup3 /> },
]
