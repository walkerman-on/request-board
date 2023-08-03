import React from "react"
import cl from "./Select.module.css"

const Select = ({ defaultValue, option, value, onChange }) => {
	return (
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className={cl.select}
		>
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
