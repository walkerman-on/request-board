import React from "react"
import cl from "./Navigation.module.css"
import { Link } from "react-router-dom"
import Logo from "../UI/icons/Logo"

const Navigation = () => {
	return (
		<div className={cl.container}>
			<nav className={cl.nav}>
				<div className={cl.navBurger}>
					<Link to={"/home"} className={cl.icons}>
						<img
							className="icons"
							src={require("../UI/icons/home.png")}
							alt="Аватар пользователя"
						/>
					</Link>
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
						<Link to="/home" className={cl.userNameLink}>
							<span className={cl.userName}>Имя Фамилия</span>
						</Link>
						<span className={cl.userStaff}>Администратор</span>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Navigation
