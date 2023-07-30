import React from "react"
import cl from "./FilterButton.module.css"

const FilterButton = ({ children }) => {
	return (
		<button className={cl.btn} type="button">
			<span className={cl.btnText}>{children}</span>
			<div className={cl.btnBg}>
				<span className={cl.amount}>5</span>
			</div>
		</button>
	)
}

export default FilterButton
