import React from "react"
import cl from "./Home.module.css"
import Navigation from "../../navigation/Navigation"
import Sidebar from "../../sidebar/Sidebar"

const Home = () => {
	return (
		<div>
			<Navigation>Доска заявок на сервисное обслуживание</Navigation>
			<div className={`${cl.menu} ${cl.container}`}>
				<Sidebar />
				<div className={cl.cont}>
					<span className={cl.text}>Напоминания</span>
					<ul className={cl.remindersList}>
						<li className={cl.remindersItem}>
							<span className={cl.titleText}>Звонок в отдел кадров</span>
							<div className={cl.infoBlock}>
								<p className={cl.secondaryText}>
									Необходимо согласовать документы по УВР-232
								</p>
								<p className={cl.thirdText}>Крайний срок ● 12 мая 2023</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Home
