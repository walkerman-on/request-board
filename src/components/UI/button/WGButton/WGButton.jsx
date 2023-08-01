import React from "react"
import cl from "./WGButton.module.css"

const WGButton = ({ children, ...props }) => {
	return (
		<button {...props} className={cl.btn} type="button">
			<span className={cl.btnText}>{children}</span>
		</button>
	)
}

export default WGButton
