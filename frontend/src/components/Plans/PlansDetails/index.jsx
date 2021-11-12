import { useApi } from 'hooks/useApi'
import { useParams } from 'react-router'
import { useLocation } from 'react-router'
import { Container } from 'components/Container'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from 'components/GlobalComponents/Title'
import { getMessage } from 'state/actions/toolTipActions'
import Bedrooms from 'components/Hotels/HotelFeatures/HotelBedrooms'
import { CurrentPlanConatainer, CurrentPlanServices } from './styles'
import { PlansInclude } from './PlansInclude'
import { PlansIncludesMovil } from './PlansIncludeMovil'
import { PlansImages } from './PlansImages'

export const PlansDetails = () => {
	// Estado inicial para abrir los servicios en pantalla movil
	const stateOpenInfo = {
		infoIncludes: false,
		infoNoIncludes: false,
		infoNotes: false
	}

	const dispatch = useDispatch()
	const location = useLocation()
	const { urlCode } = useParams()
	const [openInfo, setOpenInfo] = useState(stateOpenInfo)
	const { infoIncludes, infoNoIncludes, infoNotes } = openInfo
	const { currentPlan } = useSelector((state) => state.PlansReducer)
	const [handleScreen, setHandleScreen] = useState(window.innerWidth)
	const [include, setInclude] = useState(true)
	const { getDetailsPlans } = useApi()

	// funcion para abrir los menus en moviles
	const handleContentInfo = (key, value) => {
		setOpenInfo({
			...openInfo,
			[key]: value
		})
	}

	// funcion que hace la peticion a la db
	useEffect(() => {
		if (currentPlan === null) {
			getDetailsPlans(getDetailsPlans)
		} else if (currentPlan.id !== parseInt(urlCode)) {
			getDetailsPlans(getDetailsPlans)
		}
	}, [currentPlan, getDetailsPlans, urlCode])

	// funcion que hace el cambio en redux para el mensaje de wpp
	useEffect(() => {
		if (currentPlan) {
			dispatch(
				getMessage({
					route: location.pathname,
					title: currentPlan.destination_name,
					page: 'plans'
				})
			)
		}
	}, [currentPlan, dispatch, location])

	// funcion que calcula los cambios de pantalla
	useEffect(() => {
		window.onresize = function () {
			setHandleScreen(window.innerWidth)
		}
	}, [handleScreen])

	// funcion para cambiar el texto del botton(Include-NoInclude)
	const handleInclude = () => {
		setInclude(!include)
	}

	return (
		<>
			{currentPlan && (
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
							<PlansInclude
								handleInclude={handleInclude}
								currentPlan={currentPlan}
								include={include}
							/>
						) : (
							<PlansIncludesMovil
								infoIncludes={infoIncludes}
								infoNoIncludes={infoNoIncludes}
								infoNotes={infoNotes}
								handleContentInfo={handleContentInfo}
							/>
						)}
					</CurrentPlanServices>
				</>
			)}
		</>
	)
}
