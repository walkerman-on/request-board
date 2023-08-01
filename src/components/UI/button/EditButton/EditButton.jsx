import React from "react"
import cl from "./EditButton.module.css"

const EditButton = ({ children, ...props }) => {
	return (
		<button {...props} className={cl.btn} type="button">
			<span className={cl.btnText}>{children}</span>
		</button>
	)
}

export default EditButton
