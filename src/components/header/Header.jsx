import React from "react"
import cl from "./Header.module.css"

const Header = () => {
	return (
		<nav className={cl.nav}>
			<div className={cl.navBurger}>
				{/* <img className={cl.navigation} class="menu-burger-img" src="./img/burger-menu.svg" alt="Меню-бургер"/> */}
				<span className={cl.menuTitleText}>
					Доска заявок на сервисное обслуживание
				</span>
			</div>
			<div className={cl.menuLk}>
				<div className={cl.imgCont}>
					<img
						className={cl.lkImg}
						src={require("../../img/user-avatar.jpg")}
						alt="Аватар пользователя"
					/>
				</div>
				<div className={cl.userInfo}>
					<a href="#" className={cl.userNameLink}>
						<span className={cl.userName}>Имя Фамилия</span>
					</a>
					<span className={cl.userStaff}>Администратор</span>
				</div>
			</div>
		</nav>
	)
}

export default Header
