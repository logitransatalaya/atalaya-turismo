import React from 'react'
import { useSelector } from 'react-redux'
import { StyleModalShow } from './styles'
import ImgBedroomsModal from '../ImgBedroomsModal'

export const ModalImg = ({ handleShow, photos, state, setState }) => {
	const { stateShow, numImg } = useSelector(
		(state) => state.toolTipReducer.modalImages
	)

	return (
		stateShow && (
			<StyleModalShow
				onClick={() => {
					setState(!state)
					handleShow()
				}}
			>
				<ImgBedroomsModal
					img={photos}
					num={numImg?.num - 1}
					setState={setState}
				/>
			</StyleModalShow>
		)
	)
}
