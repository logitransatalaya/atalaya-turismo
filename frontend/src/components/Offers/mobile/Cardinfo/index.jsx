import React from 'react'
import { ContainerCard } from './styles'

const Cardinfo = () => {
	return (
		<ContainerCard>
			<div className='plane'></div>
			<div className='text'>
				<p className='white bold'>Del 20 de Octubre</p>
				<p className='white'>al 31 de Octubre</p>
			</div>
			<div className='line'></div>
			<div className='text'>
				<p className='blue bold'>Precio: $1'100.000</p>
				<p className='blue bold'>Hotel Las Américas</p>
			</div>
			<button className='reserve'>Reservar</button>
		</ContainerCard>
	)
}

export default Cardinfo
