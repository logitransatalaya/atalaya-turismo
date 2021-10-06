import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { Qualification } from 'components/HotelFeatures/Qualification'
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
								<p className='cityInfo_title'>{hotel.name}</p>
								<p>
									<small>Dirección: {hotel.addres}</small>
								</p>
								<div className='cityInfoCalification'>
									<Qualification stars={hotel.calification} />
								</div>
							</div>
							<div className='cityPrice'>
								<div>
									<p className='cityPrice_title'>
										Cop: <b>{hotel.price}</b>
									</p>
								</div>
								<div>
									<p className='cityPrice_subTitle'>
										DESDE Cop {hotel.price}
									</p>
									<p className='cityPrice_card'>
										<small>
											tarjeta sujeta a disponibilidad
										</small>
									</p>
									<Button
										text={'Ver más'}
										bgColor={'#10216f'}
										color={'#fff'}
									/>
								</div>
							</div>
						</div>
					))}
			</CityContainer>
		</Container>
	)
}
