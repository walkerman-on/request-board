import React from "react"
import cl from "./SearchButton.module.css"

const SearchButton = ({ children }) => {
	return (
		<button type="submit" className={cl.btn}>
			{/* <img src="./img/search.svg" alt="Поиск" class="request-form__submit-img"> */}
			{children}
		</button>
	)
}

export default SearchButton
