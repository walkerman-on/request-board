import React from "react"
import cl from "./Main.module.css"
import Sidebar from "../sidebar/Sidebar"
import Menu from "../menu/Menu"

const Main = () => {
	return (
		<div className={`${cl.menu} ${cl.container}`}>
			<Sidebar />
			<Menu />
		</div>
	)
}

export default Main
