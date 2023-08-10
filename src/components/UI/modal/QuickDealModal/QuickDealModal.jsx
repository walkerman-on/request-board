import React, { useState } from "react"
import cl from "./QuickDealModal.module.css"
import Select from "../../select/Select"
import CommentsInput from "../../input/commentsInput/CommentsInput"
import ReqButton from "../../button/ReqButton/ReqButton"
import data from "../../../../data.json"
import Input from "../../input/Input"
import Cards from "../../Cards/Cards"

const QuickDealModal = ({ setActive, category }) => {
	const executorList = data.executors

	const [requests, setRequests] = useState([])
	const [newRequest, setNewRequest] = useState({
		title: "",
		price: 0,
		date: "",
		category: "",
		executor: "",
	})

	const addNewRequest = () => {
		setRequests([...requests, { ...newRequest, id: Date.now() }])
		console.log(requests)
		setNewRequest({
			title: "",
			price: 0,
			date: "",
			category: "",
			executor: "",
		})
	}

	return (
		<div>
			<div className={cl.firstBlock}>
				<span className={cl.modalTitle}>Создание быстрой заявки</span>
				<div className={cl.container}>
					<span className={cl.status}>{category}</span>
				</div>
			</div>
			<div className={cl.secondBlock}>
				<div className={cl.inputBlock}>
					<p className={cl.secondaryText}>Название:</p>
					<Input
						value={newRequest.title}
						onChange={(e) =>
							setNewRequest({ ...newRequest, title: e.target.value })
						}
					></Input>
				</div>
				<div className={cl.inputBlock}>
					<p className={cl.secondaryText}>
						Стоимость выполнения работы (в рублях):
					</p>
					<Input
						value={newRequest.price}
						onChange={(e) =>
							Number(setNewRequest({ ...newRequest, price: e.target.value }))
						}
						placeholder="введите число"
					></Input>
				</div>
				<div className={cl.inputBlock}>
					<p className={cl.secondaryText}>Дата заявки:</p>
					<Input
						value={newRequest.date}
						onChange={(e) =>
							setNewRequest({ ...newRequest, date: e.target.value })
						}
						placeholder="месяц день год"
					></Input>
				</div>
				<div className={cl.inputBlock}>
					<p className={cl.secondaryText}>Исполнитель:</p>
					<Select
						value={newRequest.executor}
						onChange={(value) =>
							setNewRequest({ ...newRequest, executor: value })
						}
						option={executorList.filter((ex) => [
							{ value: ex.id, name: `${ex.name} id: ${ex.id}` },
						])}
						defaultValue={"Выберите из списка ниже"}
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
					<ReqButton
						disabled={
							!newRequest.title ||
							!newRequest.price ||
							!newRequest.date ||
							!newRequest.executor
						}
						onClick={addNewRequest}
					>
						Создать
					</ReqButton>
				</div>
			</div>
			{requests.map((req) => (
				<div>
					<h1>{req.category}</h1>
					<h1>{req.title}</h1>
					<h1>{req.price}</h1>
					<h1>{req.date}</h1>
					<h1>{req.executor}</h1>

					<Cards
						title={req.title}
						date={req.date}
						price={req.price}
						executor={req.executor}
					/>
				</div>
			))}
		</div>
	)
}

export default QuickDealModal
