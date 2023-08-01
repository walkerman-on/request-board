import React, { useState } from "react"
import cl from "./Cards.module.css"
import DealButton from "../button/DealButton/DealButton"
import { formattedDate } from "../../../utils/helper"
import data from "../../../data.json"
import Modal from "../Modal/Modal"

const Card = ({ title, date, dateChange, price, executorId }) => {
	const executorList = data.executors.find((ex) => ex.id === executorId)

	const [modalActive, setModalActive] = useState(false)

	return (
		<div>
			<Modal active={modalActive} setActive={setModalActive} />
			<li className={cl.container}>
				<div className={`${cl.cards} ${cl.borderDefault}`}>
					<div className={cl.firstBlock}>
						<p className={cl.info}>
							<span className={cl.primeryText}>{title}</span>
							<span className={cl.secondaryText}>{price} ₽</span>
							<span className={cl.tertiaryText}>{formattedDate(date)}</span>
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
							<span className={cl.secondaryText}>
								{formattedDate(dateChange)}
							</span>
						</p>
					</div>
					<div className={cl.thirdBlock}>
						<div className={cl.executorBlock}>
							<span className={cl.tertiaryText}>Исполнитель</span>
							<div className={cl.executor}>
								<div className={cl.executorCont}>
									<img
										className={cl.executorImg}
										src={require(`../../../img/executor-photo/${executorList.photo}`)}
										alt="Аватар исполнителя"
									/>
								</div>
								<a href="#" className={`${cl.tertiaryText} ${cl.executorLink}`}>
									{executorList.name}
								</a>
							</div>
						</div>
						<div className={cl.thirdBlockCards}>
							<div className={cl.work}>
								<a href="#" className={`${cl.workLink} ${cl.tertiaryText}`}>
									Дела
								</a>
								<div className={cl.workBg}>
									<span className={cl.amount}>{executorList.workAmount}</span>
								</div>
							</div>
							<DealButton onClick={() => setModalActive(true)}>
								+ Редактировать
							</DealButton>
						</div>
					</div>
				</div>
			</li>
		</div>
	)
}

export default Card
