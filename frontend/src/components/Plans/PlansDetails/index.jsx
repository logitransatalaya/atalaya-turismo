import { useApi } from 'hooks/useApi'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import { PlansImages } from './PlansImages'
import { PlansInclude } from './PlansInclude'
import { useWhatsapp } from 'hooks/useWhatsapp'
import { Container } from 'components/GlobalComponents/Container'
import React, { useEffect, useState } from 'react'
import { PlansIncludesMovil } from './PlansIncludeMovil'
import { Title } from 'components/GlobalComponents/Title'
import { Loader } from 'components/GlobalComponents/Loader'
import Bedrooms from 'components/Hotels/Nationals/HotelFeatures/HotelBedrooms'
import { CurrentPlanConatainer, CurrentPlanServices } from './styles'

export const PlansDetails = () => {
	const location = useLocation()
	const { urlCode } = useParams()
	const { getDetailsPlans } = useApi()
	const { messageWhatsapp } = useWhatsapp()
	const { currentPlan } = useSelector((state) => state.PlansReducer)
	const [handleScreen, setHandleScreen] = useState(window.innerWidth)

	// funcion que hace la peticion a la db y cambia le mensaje de wpp
	useEffect(() => {
		if (currentPlan === null) {
			getDetailsPlans(urlCode)
		} else if (currentPlan) {
			if (currentPlan.id !== parseInt(urlCode)) {
				getDetailsPlans(urlCode)
			}
			messageWhatsapp(
				location.pathname,
				currentPlan.destination_name,
				'plans'
			)
		}
	}, [currentPlan, getDetailsPlans, urlCode, location, messageWhatsapp])

	// funcion que calcula los cambios de pantalla
	useEffect(() => {
		window.onresize = function () {
			setHandleScreen(window.innerWidth)
		}
	}, [])

	return (
		<>
			{currentPlan ? (
				<>
					<Container>
						<CurrentPlanConatainer>
							<Title text={currentPlan.destination_name} />
							{handleScreen > 600 ? (
								<PlansImages currentPlan={currentPlan} />
							) : (
								<Bedrooms img={currentPlan.photos} />
							)}
							<div className='currentPlan_desc'>
								<p>{currentPlan.description}</p>
							</div>
						</CurrentPlanConatainer>
					</Container>
					<CurrentPlanServices>
						{handleScreen > 600 ? (
							<PlansInclude currentPlan={currentPlan} />
						) : (
							<PlansIncludesMovil currentPlan={currentPlan} />
						)}
					</CurrentPlanServices>
				</>
			) : (
				<Loader />
			)}
		</>
	)
}
