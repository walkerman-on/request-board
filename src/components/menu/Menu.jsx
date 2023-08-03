import React, { useState } from "react"
import cl from "./Menu.module.css"
import ReqButton from "../UI/button/ReqButton/ReqButton"
import SearchForm from "../UI/SearchForm/SearchForm"
import FilterButton from "../UI/button/FilterButton/FilterButton"
import RequestMenu from "../UI/RequestMenu/RequestMenu"
import Modal from "../UI/modal/Modal"
import DealModal from "../UI/modal/DealModal/DealModal"
import data from "../../data.json"

const Menu = () => {
	const [modalActive, setModalActive] = useState(false)

	return (
		<div>
			<Modal active={modalActive} setActive={setModalActive}>
				<DealModal setActive={setModalActive} />
			</Modal>
			<div className={cl.menu}>
				<div className={cl.bar}>
					<div className={cl.barRequest}>
						<span className={cl.requestText}>Заявки</span>
						<ReqButton onClick={() => setModalActive(true)}>
							+ Добавить сделку
						</ReqButton>
					</div>
					<SearchForm />
					<FilterButton>Фильтры</FilterButton>
				</div>
				<RequestMenu category={data.category} />
			</div>
		</div>
	)
}

export default Menu
