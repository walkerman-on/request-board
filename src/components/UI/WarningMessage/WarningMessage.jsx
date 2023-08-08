import React from "react"
import cl from "./WarningMessage.module.css"

const WarningMessage = ({ children, ...props }) => {
	return (
		<div className={cl.container}>
			<div className={cl.content}>{children}</div>
		</div>
	)
}

export default WarningMessage
