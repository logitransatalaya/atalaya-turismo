import React from 'react'
import { useSelector } from 'react-redux'
import { StyleModalShow } from './styles'

export const ModalImg = ({ handleShow }) => {
	const { stateShow, urlImg } = useSelector(
		(state) => state.toolTipReducer.modalImages
	)

	return stateShow ? (
		<StyleModalShow onClick={handleShow}>
			<div>
				<img src={urlImg} alt='imagen' />
			</div>
		</StyleModalShow>
	) : null
}
