import React from "react"
import cl from "./Home.module.css"
import Navigation from "../../navigation/Navigation"
import Sidebar from "../../sidebar/Sidebar"
import Menu from "../../menu/Menu"

const Home = () => {
	return (
		<div>
			<Navigation>Доска заявок на сервисное обслуживание</Navigation>
			<div className={`${cl.menu} ${cl.container}`}>
				<Sidebar />
				<div>Выберите рабочую группу для начала работы</div>
				{/* <Menu /> */}
			</div>
		</div>
	)
}

export default Home
