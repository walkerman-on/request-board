import React from "react"
import cl from "./WorkGroup1.module.css"
import Menu from "../../menu/Menu"
import Sidebar from "../../sidebar/Sidebar"
import Navigation from "../../navigation/Navigation"

const WorkGroup1 = () => {
	return (
		<div>
			<Navigation>Доска заявок на сервисное обслуживание</Navigation>
			<div className={`${cl.menu} ${cl.container}`}>
				<Sidebar />
				<Menu />
			</div>
		</div>
	)
}

export default WorkGroup1
