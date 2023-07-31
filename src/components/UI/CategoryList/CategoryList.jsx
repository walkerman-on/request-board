import React from "react"
import cl from "./CategoryList.module.css"
import EditButton from "../button/EditButton/EditButton"
import Cards from "../Cards/Cards"
import data from "../../../data.json"

const CategoryList = ({ name, workAmount, totalPrice, id }) => {
	const cardsList = data.applications.filter(
		(cards) => cards.category_id === id
	)

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
						{cardsList.map((card) => (
							<Cards
								title={card.title}
								date={card.date}
								dateChange={card.dateChange}
								price={card.price}
								key={card.executor_id}
								executorId={card.executor_id}
							/>
						))}
					</ul>
				</div>
			</div>
		</li>
	)
}

export default CategoryList
