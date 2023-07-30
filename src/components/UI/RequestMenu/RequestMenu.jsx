import React from "react"
import cl from "./RequestMenu.module.css"
import CategoryList from "../CategoryList/CategoryList"

const RequestMenu = ({ category }) => {
	return (
		<div className={cl.columns}>
			<ul className={cl.columnsList}>
				{category.map((category) => (
					<CategoryList
						name={category.name}
						workAmount={category.workAmount}
						totalPrice={category.totalPrice}
						key={category.id}
					/>
				))}
			</ul>
		</div>
	)
}

export default RequestMenu
