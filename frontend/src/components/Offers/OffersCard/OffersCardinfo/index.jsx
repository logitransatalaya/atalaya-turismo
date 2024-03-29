import React from 'react'
import { ContainerCard } from './styles'
import plane from 'images/svg/iconoavionblanco.svg'
import { Button } from 'components/GlobalComponents/Button'

const OffersCardinfo = ({ data }) => {
	const { from_date, to_date, price, Hotel } = data
	const handleBooking = () => {
		window.open(
			`https://wa.me/573205702937?text=Me%20interesa%20comprar%20esta%20ofera.`
		)
	}

	return (
		<ContainerCard>
			<div className='plane'>
				<img src={plane} alt='plane' />
			</div>
			<div className='text'>
				<p className='white bold'>
					Del <span>{from_date}</span>
				</p>
				<p className='white'>
					al <span>{to_date}</span>
				</p>
			</div>
			<div className='line'></div>
			<div className='text'>
				<p className='blue bold'>
					Precio: <span>${price}</span>
				</p>
				<p className='blue bold'>{Hotel}</p>
			</div>
			<Button
				onClick={handleBooking}
				text='Reservar'
				bgColor='#10216f'
				wDesc={'20%'}
			/>
		</ContainerCard>
	)
}

export default OffersCardinfo
