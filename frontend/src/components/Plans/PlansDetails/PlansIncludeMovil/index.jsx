import React, { useState } from 'react'
import { PlansIncludesMovileInfo } from './PlansIncludesMovileInfo'

export const PlansIncludesMovil = ({ currentPlan }) => {
	// Estado inicial para abrir los servicios en pantalla movil
	const stateOpenInfo = {
		infoIncludes: false,
		infoNoIncludes: false,
		infoNotes: false
	}
	const [openInfo, setOpenInfo] = useState(stateOpenInfo)
	const { infoIncludes, infoNoIncludes, infoNotes } = openInfo

	// funcion para abrir los menus en moviles
	const handleContentInfo = (key, value) => {
		setOpenInfo({
			...openInfo,
			[key]: value
		})
	}

	return (
		<div className='contentMovile_s'>
			<PlansIncludesMovileInfo
				arrow={1}
				currentPlan={currentPlan.includes}
				keyContent={'infoIncludes'}
				infoIncludes={infoIncludes}
				handleContentInfo={handleContentInfo}
				title={'INCLUYE'}
			/>
			<PlansIncludesMovileInfo
				arrow={2}
				currentPlan={currentPlan.noIncludes}
				keyContent={'infoNoIncludes'}
				infoIncludes={infoNoIncludes}
				handleContentInfo={handleContentInfo}
				title={'NO INCLUYE'}
			/>
			<PlansIncludesMovileInfo
				arrow={3}
				currentPlan={currentPlan.notes}
				keyContent={'infoNotes'}
				infoIncludes={infoNotes}
				handleContentInfo={handleContentInfo}
				title={'NOTAS'}
			/>
		</div>
	)
}
