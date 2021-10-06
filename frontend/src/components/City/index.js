import { Container } from 'components/Container'
import React from 'react'
import { useSelector } from 'react-redux'
import { CityContainer } from './styles'

export const City = () => {
	const { hotelsCity } = useSelector((state) => state.homeReducer)

	if (!hotelsCity[0]) {
		return (
			<Container>
				<h1 style={{ backgroundColor: 'red' }}>Recarga para atras</h1>
				<p>
					Esto pasa porque los datos no son persistentes, cuando se
					conecte a la base de datos esto no va a pasar
				</p>
			</Container>
		)
	}
	const { hotels } = hotelsCity[0]

	return (
		<Container>
			<CityContainer>
				{hotels &&
					hotels.map((hotel) => (
						<div className='cityCard' key={hotel.id}>
							<div className='cityBoxImg'>
								<img src={hotel.urlImg} alt={hotel.name} />
							</div>
							<div className='cityInfo'>
								<h4>{hotel.name}</h4>
								<p>
									<small>{hotel.addres}</small>
								</p>
								<div className='cityInfoCalification'>
									<b>Es un {hotel.calification} estrellas</b>
								</div>
							</div>
							<div className='cityPrice'>
								<p>
									COP: <b>{hotel.price}</b>
								</p>
								<p>DESDE Cop {hotel.price}</p>
								<p>
									<small>
										tarjeta sujeta a disponibilidad
									</small>
								</p>
								<button>ver más</button>
							</div>
						</div>
					))}
			</CityContainer>
		</Container>
	)
}
