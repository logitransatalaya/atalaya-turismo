import React from 'react'
import { useHistory } from 'react-router'

export const GoBack = () => {
	const history = useHistory()

	const handleClick = () => {
		console.log(history)
	}

	return <div onClick={handleClick}>volver atras</div>
}
