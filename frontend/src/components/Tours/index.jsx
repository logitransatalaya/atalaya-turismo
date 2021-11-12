import { useApi } from 'hooks/useApi'
import { ToursStyled } from './styles'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'components/Container'
import { Link, useHistory } from 'react-router-dom'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'
import { CardImagesGradiants } from 'components/GlobalComponents/CardImagesGradiants'

export const Tours = () => {
	const history = useHistory()
	const { tours } = useSelector((state) => state.tourReducer)
	const { getToursApi } = useApi()

	useEffect(() => {
		if (tours === null) {
			getToursApi()
		}
		history.replace('/tours')
	}, [history, getToursApi, tours])

	return (
		<Container>
			<ToursStyled>
				<Title text={'TOURES ANTIOQUEÑOS'} fontWeight='true' />
				{tours ? (
					<div className='ToursCards-container'>
						{tours?.map((tour, i) => (
							<Link to={`tours/${tour.id}`} key={i}>
								<CardImagesGradiants
									url={tour.url_img_card}
									alt={tour.title}
									name={tour.title}
								/>
							</Link>
						))}
					</div>
				) : (
					<Loader />
				)}
			</ToursStyled>
		</Container>
	)
}
