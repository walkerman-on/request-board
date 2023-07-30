import React from "react"
import cl from "./SearchForm.module.css"
import SearchButton from "../button/SearchButton/SearchButton"
import Input from "../input/Input"

const SearchForm = () => {
	return (
		<form className={cl.requestForm}>
			{/* <img src="./img/cancel-search.svg" alt="Отмена поиска" class="request-form__search-img"> */}
			<Input />
			<SearchButton>Поиск</SearchButton>
		</form>
	)
}

export default SearchForm