import './styles.css'
import React from 'react'

export const Container = ({ children }) => {
	return (
		<div>
			<div className='Container'>{children}</div>
		</div>
	)
}
