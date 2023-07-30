import React from "react"
import cl from "./Input.module.css"

const Input = () => {
	return (
		<input
			type="text"
			name="form-search"
			className={cl.search}
			placeholder="Поиск по сделкам"
		></input>
	)
}

export default Input
