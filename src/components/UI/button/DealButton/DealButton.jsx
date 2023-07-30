import React from "react"
import cl from "./DealButton.module.css"

const DealButton = ({ children }) => {
	return (
		<button className={cl.btn} type="button">
			<span className={cl.btnText}>{children}</span>
		</button>
	)
}

export default DealButton
