import React from "react"
import cl from "./Main.module.css"
import Sidebar from "../sidebar/Sidebar"
import Menu from "../menu/Menu"

const Main = () => {
	return (
		<div className={cl.container}>
			<div className={cl.menu}>
				<Sidebar />
				<Menu />
			</div>
		</div>
	)
}

export default Main
