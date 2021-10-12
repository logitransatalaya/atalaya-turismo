import { FaStar } from 'react-icons/fa'
import { ContainerStars } from './style'
import React, { useEffect, useState } from 'react'

export const Qualification = ({ stars }) => {
	// console.log(stars)
	const [clicked, setClicked] = useState([false, false, false, false, false])

	const handleStarClick = (index) => {
		let clickStates = [...clicked]
		for (let i = 0; i < 5; i++) {
			if (i <= index) clickStates[i] = true
			else clickStates[i] = false
		}
		setClicked(clickStates)
	}
	useEffect(() => {
		handleStarClick(stars - 1)
		// eslint-disable-next-line
	}, [])
	console.log(stars)
	return (
		<ContainerStars>
			<div>
				<FaStar className={clicked[0] ? 'clickedstar' : null} />
				<FaStar className={clicked[1] ? 'clickedstar' : null} />
				<FaStar className={clicked[2] ? 'clickedstar' : null} />
				<FaStar className={clicked[3] ? 'clickedstar' : null} />
				<FaStar className={clicked[4] ? 'clickedstar' : null} />
			</div>
		</ContainerStars>
	)
}
