import { Container } from 'components/Container'
import React from 'react'
import { PlansContainer } from './styles'

const images = [
	{
		id: 1,
		name: 'San andres',
		url: 'https://media.staticontent.com/media/pictures/ecc404e8-9a99-46b0-a56a-ead992b5166e'
	},
	{
		id: 2,
		name: 'Cartagena',
		url: 'https://cdn.colombia.com/images/v2/turismo/sitios-turisticos/cartagena/ciudad-cartagena-800.jpg'
	},
	{
		id: 3,
		name: 'Desierto de la tatacoa',
		url: 'https://www.otbcali.com/wp-content/uploads/2019/10/huila3.png'
	},
	{
		id: 4,
		name: 'Santa marta',
		url: 'https://www.santamarta.gov.co/sites/default/files/santa_marta_1_0.jpg'
	},
	{
		id: 5,
		name: 'Amazonas',
		url: 'https://www.scidev.net/america-latina/wp-content/uploads/sites/3/2020/11/Amazonas.jpg'
	},
	{
		id: 6,
		name: 'Eje cafetero',
		url: 'https://expotur-eco.com/wp-content/uploads/2019/11/eje-cafetero-colombia.-foto-tomada-de-viajes-luxury.jpg'
	},
	{
		id: 7,
		name: 'La guajira',
		url: 'https://miviaje.com/wp-content/uploads/2019/05/dunas-taroa-guajira.jpg'
	},
	{
		id: 8,
		name: 'Coveñas',
		url: 'https://elgolfodemorrosquillo.com/wp-content/uploads/2020/02/como-llegar-a-covenas.jpg'
	}
]

export const Plans = () => {
	return (
		<Container>
			<PlansContainer>
				<h2 className='plansTitle'>PLANES NACIONALES</h2>
				<div className='plansContent'>
					{images.map((img) => (
						<div className='plansCard' key={img.id}>
							<div className='plansBoxImg'>
								<img src={img.url} alt={img.name} />
							</div>
							<div className='plansCardTitle'>
								<p>{img.name}</p>
							</div>
						</div>
					))}
				</div>
			</PlansContainer>
		</Container>
	)
}
