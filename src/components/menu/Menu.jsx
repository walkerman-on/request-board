import React from "react"
import cl from "./Menu.module.css"
import ReqButton from "../UI/button/ReqButton/ReqButton"
import SearchForm from "../UI/SearchForm/SearchForm"
import FilterButton from "../UI/button/FilterButton/FilterButton"
import RequestMenu from "../UI/RequestMenu/RequestMenu"
import data from "../../data.json"

const Menu = () => {
	return (
		<div className={cl.menu}>
			<div className={cl.bar}>
				<div className={cl.barRequest}>
					<span className={cl.requestText}>Заявки</span>
					<ReqButton>+ Добавить сделку</ReqButton>
				</div>
				<SearchForm />
				<FilterButton>Фильтры</FilterButton>
			</div>
			<RequestMenu category={data.category} />
		</div>
	)
}

export default Menu
