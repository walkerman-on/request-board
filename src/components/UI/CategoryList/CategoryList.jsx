import React from "react"
import cl from "./CategoryList.module.css"
import EditButton from "../button/EditButton/EditButton"

const CategoryList = () => {
	return (
		<li className={cl.container}>
			<div className={cl.columnCont}>
				<div className={cl.info}>
					<div className={cl.infoTitle}>
						<span className={cl.category}>Входящие</span>
						<div className={cl.amountBg}>
							<span className={cl.amount}>4</span>
						</div>
					</div>
					<span className={cl.price}>3500 ₽</span>
					<EditButton>+ Быстрая сделка</EditButton>
				</div>
				<div className={cl.cardsCont}>
					<ul className={cl.cardsList}></ul>
				</div>
			</div>
		</li>
	)
}

export default CategoryList
