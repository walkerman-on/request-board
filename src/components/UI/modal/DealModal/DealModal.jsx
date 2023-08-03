import React from "react"
import cl from "./DealModal.module.css"
import CommentsInput from "../../input/commentsInput/CommentsInput"
import ReqButton from "../../button/ReqButton/ReqButton"
import Select from "../../select/Select"
import Input from "../../input/Input"
import data from "../../../../data.json"

const DealModal = ({ setActive }) => {
	const executorList = data.executors

	return (
		<div>
			<div className={cl.firstBlock}>
				<span className={cl.modalTitle}>Создание новой заявки</span>
				<div className={cl.container}>
					<Select
						option={[
							{ value: "incoming", name: "Входящие" },
							{ value: "working", name: "В работе" },
							{ value: "approval", name: "На согласовании" },
							{ value: "ready", name: "Готов" },
							{ value: "shipment", name: "К отгрузке" },
						]}
						defaultValue={"Статус заявки ▼"}
					/>
					<span className={cl.status}>В работе</span>
				</div>
			</div>
			<div className={cl.secondBlock}>
				<span className={cl.titleCard}>Поверка датчиков на УПН-231</span>
				<div className={cl.inputBlock}>
					<p className={cl.secondaryText}>Название:</p>
					<Input></Input>
				</div>
				<div className={cl.inputBlock}>
					<p className={cl.secondaryText}>
						Стоимость выполнения работы (в рублях):
					</p>
					<Input></Input>
				</div>
				<div className={cl.inputBlock}>
					<p className={cl.secondaryText}>Дата заявки:</p>
					<Input></Input>
				</div>
				<div className={cl.inputBlock}>
					<p className={cl.secondaryText}>Исполнитель:</p>
					<Select
						option={executorList.filter((ex) => [
							{ value: ex.id, name: `${ex.name} id: ${ex.id}` },
						])}
						defaultValue={"Исполнитель ▼"}
					/>
				</div>
				<div className={cl.commentsBlock}>
					<p className={cl.secondaryText}>Комментарий:</p>
					<CommentsInput />
				</div>
				<div className={cl.btnSection}>
					<span onClick={() => setActive(false)} className={cl.btnDisacrd}>
						Отменить
					</span>
					<ReqButton>Создать</ReqButton>
				</div>
			</div>
		</div>
	)
}

export default DealModal
