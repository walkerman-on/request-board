import React from "react"
import cl from "./ReqButton.module.css"

const ReqButton = ({ children }) => {
	return (
		<button className={cl.requestBtn} type="button">
			<span className={cl.btnText}>{children}</span>
		</button>
	)
}

export default ReqButton
