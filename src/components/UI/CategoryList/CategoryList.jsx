import React from "react"
import cl from "./CategoryList.module.css"
import EditButton from "../button/EditButton/EditButton"
import Cards from "../Cards/Cards"

const CategoryList = ({ name, workAmount, totalPrice }) => {
	return (
		<li className={cl.container}>
			<div className={cl.columnCont}>
				<div className={cl.info}>
					<div className={cl.infoTitle}>
						<span className={cl.category}>{name}</span>
						<div className={cl.amountBg}>
							<span className={cl.amount}>{workAmount}</span>
						</div>
					</div>
					<span className={cl.price}>{totalPrice} ₽</span>
					<EditButton>+ Быстрая сделка</EditButton>
				</div>
				<div className={cl.cardsCont}>
					<ul className={cl.cardsList}>
						<Cards />
					</ul>
				</div>
			</div>
		</li>
	)
}

export default CategoryList
