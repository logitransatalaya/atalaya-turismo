import React from 'react'
import { HeaderCardStyled, CardGrid } from './style'
import { ReactComponent as IconPalmera } from '../../../images/icono-palmera.svg'

export const HeaderFeature = () => {
	return (
		<div>
			<HeaderCardStyled>
				<div>
					<div className='card_title'>TRYP MEDELLIN ESTADIO</div>
					<div className='card_location'>
						<div className='card_icon'>
							<IconPalmera />
						</div>
						<p>Medellin</p>
					</div>
					<div>Aqui van las estrellas</div>
				</div>
				<div>
					<button className='card_button'>Reservas</button>
				</div>
			</HeaderCardStyled>
			<CardGrid>
				<div className='card_1'></div>
				<div className='card_2'></div>
				<div className='card_3'></div>
				<div className='card_4'></div>
			</CardGrid>
		</div>
	)
}
