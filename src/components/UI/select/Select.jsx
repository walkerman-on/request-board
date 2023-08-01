import React from "react"
import cl from "./Select.module.css"

const Select = ({ defaultValue, option }) => {
	return (
		<select className={cl.select}>
			<option disabled value="" className={cl.options}>
				{defaultValue}
			</option>
			{option.map((option) => (
				<option key={option.value}>{option.name}</option>
			))}
		</select>
	)
}

export default Select
