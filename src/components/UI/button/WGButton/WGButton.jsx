import React from "react"
import cl from "./WGButton.module.css"

const WGButton = ({ children }) => {
	return (
		<button className={cl.button} type="button">
			<span className={cl.buttonText}>{children}</span>
		</button>
	)
}

export default WGButton
