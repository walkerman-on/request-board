import React, { useState } from "react"
import { Link } from "react-router-dom"
import cl from "./Sidebar.module.css"
import WGButton from "../UI/button/WGButton/WGButton"
import WarningMessage from "../UI/WarningMessage/WarningMessage"

const Sidebar = () => {
	const [active, setActive] = useState(1)

	const [groups, setGroups] = useState(["Рабочая группа", "Рабочая группа"])
	const [newGroup, setNewGroup] = useState("Рабочая группа")

	const addNewGroup = (index) => {
		setGroups([...groups, newGroup])
	}

	return (
		<div className={cl.menuCont}>
			<aside className={cl.menu}>
				<div className={cl.workGroup}>
					<div className={cl.groupList}>
						{groups.map((groupItem, index) => {
							return (
								<Link
									className={`${
										active === index + 1
											? cl.groupItem && cl.groupItemActive
											: cl.groupItem
									}`}
									onClick={() => setActive(index + 1)}
									to={`/workgroup${index + 1}`}
								>
									{groupItem} {index + 1}
								</Link>
							)
						})}
					</div>
					{groups.length > 2 ? (
						<WarningMessage>Допустимое число рабочих групп - 3</WarningMessage>
					) : (
						""
					)}
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
