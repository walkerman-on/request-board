import React from "react"
import cl from "./ReqButton.module.css"

const ReqButton = ({ children, ...props }) => {
	return (
		<button {...props} className={cl.btn} type="button">
			<span className={cl.btnText}>{children}</span>
		</button>
	)
}

export default ReqButton
