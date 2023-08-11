import React, { useState } from "react"
import { Link } from "react-router-dom"
import cl from "./UserAccount.module.css"
import Input from "../../UI/input/Input"
import Select from "../../UI/select/Select"
import ReqButton from "../../UI/button/ReqButton/ReqButton"
import Navigation from "../../navigation/Navigation"

const UserAccount = () => {
	const [usersInfo, setUsersInfo] = useState([])

	const [userInfo, setUserInfo] = useState({
		name: "",
		surname: "",
		id: "",
		post: "",
	})

	const editUserInfo = () => {
		setUsersInfo([...usersInfo, { ...userInfo, id: Date.now() }])
		console.log(usersInfo)
		setUserInfo({
			name: "",
			surname: "",
			userId: "",
			post: "",
		})
	}

	return (
		<div>
			<Navigation>Личные данные</Navigation>
			<div className={cl.navMenu}>
				<div className={cl.container}>
					<div className={cl.cont}>
						<span className={cl.status}>Настройка профиля</span>
					</div>
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
						{usersInfo.map((info) => (
							<div className={cl.userInfo}>
								<span className={cl.userNameText}>
									{info.name} {info.surname}
								</span>
								<span className={cl.userIDText}>ID: {info.userId}</span>
							</div>
						))}
					</div>
					<div className={cl.infoBlock}>
						<div className={cl.inputBlock}>
							<p className={cl.secondaryText}>Имя:</p>
							<Input
								value={userInfo.name}
								onChange={(e) =>
									setUserInfo({ ...userInfo, name: e.target.value })
								}
							></Input>
						</div>
						<div className={cl.inputBlock}>
							<p className={cl.secondaryText}>Фамилия:</p>
							<Input
								value={userInfo.surname}
								onChange={(e) =>
									setUserInfo({ ...userInfo, surname: e.target.value })
								}
							></Input>
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
							<Input
								placeholder="ХХХ ХХХ ХХХ"
								value={userInfo.userIid}
								onChange={(e) =>
									setUserInfo({ ...userInfo, userId: e.target.value })
								}
							></Input>
						</div>
					</div>
					<div className={cl.btnSection}>
						<ReqButton onClick={editUserInfo}>Сохранить</ReqButton>
					</div>
				</div>
				<div className={cl.container}>
					<div className={cl.cont}>
						<span className={cl.status}>Изменение пароля</span>
					</div>
					<div className={cl.inputBlock}>
						<p className={cl.secondaryText}>Текущий пароль:</p>
						<Input placeholder="*******"></Input>
					</div>
					<div className={cl.inputBlock}>
						<p className={cl.secondaryText}>Новый пароль:</p>
						<Input placeholder="*******"></Input>
					</div>
					<div className={cl.inputBlock}>
						<p className={cl.secondaryText}>Повторение нового пароля:</p>
						<Input placeholder="*******"></Input>
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
