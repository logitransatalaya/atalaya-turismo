import { Card } from './styles'
import OffersInfo from './OffersInfo'
import OffersSlider from './OffersSlider'
import React, { useEffect, useState } from 'react'
import OffersCardinfo from './OffersCardinfo'

const OffersCard = ({ data }) => {
	const [width, setWidth] = useState(0)
	const { photos } = data
	useEffect(() => {
		setWidth(window.innerWidth)
		window.onresize = () => {
			setWidth(window.innerWidth)
		}
	}, [width])

	return (
		<Card>
			{data && (
				<div className='containerSF'>
					<OffersSlider photos={photos} />
					<OffersInfo data={data} />
				</div>
			)}
			{width > 800 && <OffersCardinfo data={data} />}
		</Card>
	)
}

export default OffersCard
