import React from "react"
import cl from "./RequestMenu.module.css"
import CategoryList from "../CategoryList/CategoryList"
import { useContext } from "react"
import DataContext from "../../../App.js"

const RequestMenu = ({ category }) => {
	const data = useContext(DataContext)
	// const category = data.
	console.log("Дата -", data)
	return (
		<div className={cl.columns}>
			<ul className={cl.columnsList}>
				{category.map((category) => (
					<CategoryList
						name={category.name}
						workAmount={category.workAmount}
						totalPrice={category.totalPrice}
						id={category.id}
						key={category.id}
					/>
				))}
			</ul>
		</div>
	)
}

export default RequestMenu
