import React from 'react'
import { PlansIncludesMovileInfo } from './PlansIncludesMovileInfo'

export const PlansIncludesMovil = ({
	infoIncludes,
	infoNoIncludes,
	infoNotes,
	handleContentInfo,
	currentPlan
}) => {
	return (
		<div className='contentMovile_s'>
			<PlansIncludesMovileInfo
				currentPlan={currentPlan.includes}
				keyContent={'infoIncludes'}
				infoIncludes={infoIncludes}
				handleContentInfo={handleContentInfo}
				title={'INCLUYE'}
			/>
			<PlansIncludesMovileInfo
				currentPlan={currentPlan.noIncludes}
				keyContent={'infoNoIncludes'}
				infoIncludes={infoNoIncludes}
				handleContentInfo={handleContentInfo}
				title={'NO INCLUYE'}
			/>
			<PlansIncludesMovileInfo
				currentPlan={currentPlan.notes}
				keyContent={'infoNotes'}
				infoIncludes={infoNotes}
				handleContentInfo={handleContentInfo}
				title={'NOTAS'}
			/>
		</div>
	)
}
