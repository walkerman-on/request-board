import React, { useState } from "react"
import { Link } from "react-router-dom"
import cl from "./Sidebar.module.css"
import WGButton from "../UI/button/WGButton/WGButton"

const Sidebar = () => {
	const [active, setActive] = useState(0)

	const [groups, setGroups] = useState(["Рабочая группа"])
	const [newGroup, setNewGroup] = useState("Рабочая группа")

	const addNewGroup = () => {
		setGroups([...groups, newGroup])
	}

	return (
		<div className={cl.menuCont}>
			<aside className={cl.menu}>
				<div className={cl.workGroup}>
					<ul className={cl.groupList}>
						{groups.map((groupItem, index) => {
							return (
								<li
									className={`${
										index === active
											? cl.groupItem && cl.groupItemActive
											: cl.groupItem
									}`}
									onClick={() => setActive(groupItem)}
									key={index}
								>
									<Link to={`/workgroup${index + 1}`}>
										{groupItem} {index + 1}
									</Link>
								</li>
							)
						})}
					</ul>
					<WGButton
						disabled={groups.length > 2 ? true : false}
						onClick={addNewGroup}
					>
						Добавить группу +
					</WGButton>
				</div>
				<div className={cl.settings}>
					{/* <img
						src="./img/settings-menu.svg"
						alt="Настройки"
						class="settings-img"
					/> */}
					<Link to={""} className={cl.settingsLink}>
						Настройки меню
					</Link>
				</div>
			</aside>
		</div>
	)
}

export default Sidebar
