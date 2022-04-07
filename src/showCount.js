import React from "react"
import { useSelector } from "react-redux"

function ShowCount() {
	const count = useSelector((state) => state.counter)
	const isLogged = useSelector((state) => {
		return state.isLogged
	})
	return (
		<div style={{ margin: "5rem" }}>
			<div>{count}</div>
			<div>{isLogged ? <div>You are logged in</div> : null}</div>
		</div>
	)
}

export default ShowCount
