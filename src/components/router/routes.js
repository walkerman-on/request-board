import React from "react"
import Login from "../pages/Login.jsx"
import WorkGroup1 from "../pages/WorkGroup1/WorkGroup1.jsx"
import WorkGroup2 from "../pages/WorkGroup2/WorkGroup2.jsx"
import WorkGroup3 from "../pages/WorkGroup3/WorkGroup3.jsx"
import Home from "../pages/Home/Home.jsx"
import UserAccount from "../pages/Account/UserAccount.jsx"

export const privateRoutes = [
	{ path: "/home", element: <Home /> },
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/account", element: <UserAccount /> },
	{ path: "/group/1", element: <WorkGroup1 /> },
	{ path: "/group/2", element: <WorkGroup2 /> },
	{ path: "/group/3", element: <WorkGroup3 /> },
]
