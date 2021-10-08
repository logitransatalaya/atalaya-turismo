import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import { getCurrentPlan } from '../../../state/actions/plansAction'
import { plans } from '../../../json/plans.json'

import { CurrentPlanConatainer, CurrentPlanServices } from './styles'
import { Container } from 'components/Container'
import { useState } from 'react'
import Bedrooms from 'components/HotelFeatures/Bedrooms'

export const DetailsPlan = () => {
	const { urlCode } = useParams()
	const dispatch = useDispatch()
	const { currentPlan } = useSelector((state) => state.PlansReducer)
	useEffect(() => {
		if (!currentPlan) {
			const [currentPlanJson] = plans.filter(
				(plan) => plan.urlCode === urlCode
			)
			dispatch(getCurrentPlan(currentPlanJson))
		} else if (currentPlan.urlCode !== urlCode) {
			const [currentPlanJson] = plans.filter(
				(plan) => plan.urlCode === urlCode
			)
			dispatch(getCurrentPlan(currentPlanJson))
		}
	}, [currentPlan, dispatch, urlCode])

	const [handleScreen, setHandleScreen] = useState(window.innerWidth)

	useEffect(() => {
		window.onresize = function () {
			setHandleScreen(window.innerWidth)
		}
	}, [handleScreen])

	return (
		<>
			{currentPlan && (
				<>
					<Container>
						<CurrentPlanConatainer>
							{
								<>
									<h2 className='currentPlan_title'>
										plan {currentPlan.name}
									</h2>

									{handleScreen > 600 ? (
										<div className='containerImages'>
											{currentPlan.photos.map(
												(url, i) => (
													<img
														key={i}
														src={url.urlCode}
														alt={url.name}
													/>
												)
											)}
										</div>
									) : (
										<Bedrooms img={currentPlan.photos} />
									)}

									<div className='currentPlan_desc'>
										<p>{currentPlan.desc}</p>
									</div>
								</>
							}
						</CurrentPlanConatainer>
					</Container>
					<CurrentPlanServices>
						<div className='contentMax_services'>
							<h2>INCLUYE</h2>
							<div className='services_content'>
								{currentPlan.IncludesPlan.map((service, i) => (
									<div key={i} className='box_services'>
										<span>{service.des}</span>
									</div>
								))}
							</div>
							<div className='box_buttons'>
								<span>No incluye</span>
								<span>Notas</span>
							</div>
						</div>
					</CurrentPlanServices>
				</>
			)}
		</>
	)
}
