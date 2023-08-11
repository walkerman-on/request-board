import React from "react"
import cl from "./UserAccount.module.css"
import Input from "../../UI/input/Input"
import Select from "../../UI/select/Select"
import ReqButton from "../../UI/button/ReqButton/ReqButton"
import Navigation from "../../navigation/Navigation"

const UserAccount = () => {
	return (
		<div>
			<Navigation>Личные данные</Navigation>
			<div className={cl.navMenu}>
				<div>Меню выбора</div>
				<div className={cl.container}>
					<div className={cl.userContainer}>
						{/* <img
							className={cl.userAvatar}
							src={require("../../../img/user-avatar.jpg")}
							alt="Аватар пользователя"
						/> */}
						<div className={cl.imgCont}>
							<img
								className={cl.lkImg}
								src={require("../../../img/user-avatar.jpg")}
								alt="Аватар пользователя"
							/>
						</div>
						<div className={cl.userInfo}>
							<span className={cl.userNameText}>Иван Абрамов</span>
							<span className={cl.userIDText}>ID: 234980197</span>
						</div>
					</div>
					<div className={cl.infoBlock}>
						<div className={cl.inputBlock}>
							<p className={cl.secondaryText}>Имя:</p>
							<Input></Input>
						</div>
						<div className={cl.inputBlock}>
							<p className={cl.secondaryText}>Фамилия:</p>
							<Input></Input>
						</div>
					</div>
					<div className={cl.infoBlock}>
						<div className={cl.inputBlock}>
							<p className={cl.secondaryText}>Должность:</p>
							<Select
								option={[
									{ value: "admin", name: "Администратор" },
									{ value: "duty", name: "Дежурный" },
									{ value: "visitor", name: "Гость" },
								]}
								defaultValue={"Выберите из списка ниже"}
							/>
						</div>
						<div className={cl.inputBlock}>
							<p className={cl.secondaryText}>Номер табельного:</p>
							<Input placeholder="ХХХ ХХХ ХХХ"></Input>
						</div>
					</div>
					<div className={cl.btnSection}>
						<ReqButton>Сохранить</ReqButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserAccount
