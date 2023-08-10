import React from "react"
import cl from "./WarningMessage.module.css"

const WarningMessage = ({ children, active, setActive }) => {
	setInterval(function () {
		setActive(true)
	}, 2500)

	const rootClasses = [cl.container]
	if (active) {
		rootClasses.push(cl.active)
	}
	return (
		<div className={rootClasses.join(" ")}>
			<div className={cl.content}>{children}</div>
		</div>
	)
}

export default WarningMessage
