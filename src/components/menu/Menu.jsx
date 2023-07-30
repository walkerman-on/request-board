import React from "react"
import cl from "./Menu.module.css"
import ReqButton from "../UI/button/ReqButton/ReqButton"
import SearchForm from "../UI/SearchForm/SearchForm"

const Menu = () => {
	return (
		<div className={cl.menu}>
			<div className={cl.bar}>
				<div className={cl.barRequest}>
					<span className={cl.requestText}>Заявки</span>
					<ReqButton>+ Добавить сделку</ReqButton>
				</div>
				<SearchForm />
				{/* <form className = {cl.requestForm}>
                            <img src="./img/cancel-search.svg" alt="Отмена поиска" class="request-form__search-img">
                            <button type="submit" name="submit-search" className = {cl.} class="request-form__submit">
                                <img src="./img/search.svg" alt="Поиск" class="request-form__submit-img">
                            </button>
                        </form>
                        <button className = {cl.} class="bar__button-filtr" type="button">
                            <span className = {cl.} class="button-filtr-text">Фильтры</span>
                            <div className = {cl.} class="button-filtr-bg">
                                <span className = {cl.} class="button-filtr-amount">5</span>
                            </div>
                        </button> */}
			</div>
			{/* <div className = {cl.} class="main__applications-columns">
                        <ul className = {cl.} class="applications-columns__list">
                            
                        </ul>
                    </div> */}
		</div>
	)
}

export default Menu
