import React from "react"
import cl from "./Sidebar.module.css"
import WGButton from "../UI/button/WGButton/WGButton"

const Sidebar = () => {
	return (
		<div className={cl.menuCont}>
			<aside className={cl.menu}>
				<div className={cl.workGroup}>
					<ul className={cl.groupList}>
						<li className={cl.groupItem}>
							<a href="#" className={cl.workGroupLink}>
								Рабочая группа 1
							</a>
						</li>
						<li className={cl.groupItem}>
							<a
								href="#"
								className={`${cl.workGroupLink} ${cl.workGroupLinkActive}`}
							>
								Рабочая группа 2
							</a>
						</li>
						<li className={cl.groupItem}>
							<a href="#" className={cl.workGroupLink}>
								Рабочая группа 3
							</a>
						</li>
					</ul>
					<WGButton>Добавить группу +</WGButton>
				</div>
				<div cclassName={cl.settings}>
					{/* <img
						src="./img/settings-menu.svg"
						alt="Настройки"
						class="settings-img"
					/> */}
					<a className={cl.settingsLink}>Настройки меню</a>
				</div>
			</aside>
		</div>
	)
}

export default Sidebar
