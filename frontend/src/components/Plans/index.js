import { useApi } from 'hooks/useApi'
import { Link } from 'react-router-dom'
import { PlansContainer } from './styles'
import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { getAllPlans } from '../../state/actions/plansAction'

export const Plans = () => {
	const dispatch = useDispatch()
	const { plansReducer } = useSelector((state) => state.PlansReducer)
	const [dataInfo, setDataInfo] = useState(null)
	const { getPlans } = useApi()

	useEffect(() => {
		if (!plansReducer) {
			getPlans(setDataInfo)
			if (dataInfo) {
				dispatch(getAllPlans(dataInfo.planes))
			}
		}
	}, [plansReducer, getPlans, dataInfo, dispatch])
	return (
		<Container>
			{plansReducer && (
				<PlansContainer>
					<Title text={'PLANES NACIONALES'} />
					<div className='plansContent'>
						{plansReducer?.map((img, i) => {
							return (
								<Link to={`/planes/${img.id}`} key={i}>
									<div className='plansCard' key={img.id}>
										<div className='plansBoxImg'>
											<img
												src={img.url_img_card}
												alt={img.destination_name}
											/>
										</div>
										<div className='plansCardTitle'>
											<p>{img.destination_name}</p>
										</div>
									</div>
								</Link>
							)
						})}
					</div>
				</PlansContainer>
			)}
		</Container>
	)
}
