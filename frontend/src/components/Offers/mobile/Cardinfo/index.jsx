import React from 'react'
import { ContainerCard } from './styles'
import plane from 'images/svg/iconoavionblanco.svg'
import { Button } from 'components/GlobalComponents/Button'

const Cardinfo = ({ data }) => {
	const { fromDate, toDate, price, hotel } = data

	const handleBooking = () => {
		window.open(
			`https://wa.me/573145554761?text=Me%20interesa%20comprar%20esta%20ofera.`
		)
	}

	return (
		<ContainerCard>
			<div className='plane'>
				<img src={plane} alt='plane' />
			</div>
			<div className='text'>
				<p className='white bold'>Del {fromDate}</p>
				<p className='white'>al {toDate}</p>
			</div>
			<div className='line'></div>
			<div className='text'>
				<p className='blue bold'>Precio: ${price}</p>
				<p className='blue bold'>{hotel}</p>
			</div>
			{/* <button className='reserve'>Reservar</button> */}
			<Button
				onClick={handleBooking}
				text='Reservar'
				bgColor='#10216f'
				wDesc={'20%'}
			/>
		</ContainerCard>
	)
}

export default Cardinfo
