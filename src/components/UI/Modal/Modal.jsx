import React from "react"
import cl from "./Modal.module.css"
import Select from "../select/Select"
import CommentsInput from "../input/commentsInput/CommentsInput"
import ReqButton from "../button/ReqButton/ReqButton"
import data from "../../../data.json"

const Modal = ({ active, setActive }) => {
	const executorList = data.executors

	const rootClasses = [cl.modal]

	if (active) {
		rootClasses.push(cl.active)
	}

	return (
		<div className={rootClasses.join(" ")} onClick={() => setActive(false)}>
			<div className={cl.content} onClick={(e) => e.stopPropagation()}>
				<div className={cl.firstBlock}>
					<span className={cl.modalTitle}>Редактирование заявки</span>
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
						<p className={cl.secondaryText}>Приоритет:</p>
						<Select
							option={[
								{ value: "incoming", name: "Критический" },
								{ value: "working", name: "Базовый" },
								{ value: "approval", name: "Другой" },
							]}
							defaultValue={"Приоритет ▼"}
						/>
					</div>
					<div className={cl.inputBlock}>
						<p className={cl.secondaryText}>Исполнитель:</p>
						<Select
							option={executorList.filter((ex) => [
								{ value: ex.id, name: `${ex.name} id: ${ex.id} ` },
							])}
							defaultValue={"Исполнитель ▼"}
						/>
					</div>
					<div className={cl.commentsBlock}>
						<p className={cl.secondaryText}>Комментарий:</p>
						<CommentsInput />
					</div>
					<div className={cl.btnSection}>
						<span className={cl.btnDisacrd}>Отменить</span>
						<ReqButton>Сохранить</ReqButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
