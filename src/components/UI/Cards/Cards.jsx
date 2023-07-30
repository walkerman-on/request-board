import React from "react"
import cl from "./Cards.module.css"
import DealButton from "../button/DealButton/DealButton"

const Card = () => {
	return (
		<li className={cl.container}>
			<div className={`${cl.cards} ${cl.borderOrange}`}>
				<div className={cl.firstBlock}>
					<p className={cl.info}>
						<span className={cl.primeryText}>efef</span>
						<span className={cl.secondaryText}>500 ₽</span>
						<span className={cl.tertiaryText}>15 августа 2022</span>
					</p>
					<div className={cl.contact}>
						{/* <img src="./img/phone-icon.svg" alt="Иконка телефона" class="contact-img">
                        <img src="./img/email-icon.svg" alt="Иконка почты" class="contact-img">
                        <img src="./img/message-icon.svg" alt="Иконка сообщения" class="contact-img"> */}
					</div>
				</div>
				<div className={cl.secondBlock}>
					<p className={cl.dateChange}>
						<span className={cl.tertiaryText}>Дата изменения</span>
						<span className={cl.secondaryText}>15 августа 2022</span>
					</p>
				</div>
				<div className={cl.thirdBlock}>
					<div className={cl.executor}>
						<span className={cl.tertiaryText}>Исполнитель</span>
						<div className={cl.executor}>
							<div className={cl.executorCont}>
								{/* <img class ="executor-img" src="${executorData.photo || defaultCard.executorImg}" alt="Аватар исполнителя"> */}
							</div>
							<a href="#" className={`${cl.tertiaryText} ${cl.executorLink}`}>
								Олег Иванов
							</a>
						</div>
					</div>
					<div className={cl.thirdBlock}>
						<div className={cl.work}>
							<a href="#" className={`${cl.workLink} ${cl.tertiaryText}`}>
								Дела
							</a>
							<div className={cl.workBg}>
								<span className={cl.amount}>3</span>
							</div>
						</div>
						<DealButton>+ Редактировать</DealButton>
					</div>
				</div>
			</div>
		</li>
	)
}

export default Card
