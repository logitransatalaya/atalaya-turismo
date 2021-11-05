import React from 'react'

export const IncludesMovile = ({
	keyContent,
	infoIncludes,
	handleContentInfo,
	title,
	currentPlan
}) => {
	return (
		<div
			className={
				infoIncludes ? 'includesMovile_s bg_active' : 'includesMovile_s'
			}
			onClick={() => handleContentInfo(keyContent, !infoIncludes)}
		>
			<div
				className={infoIncludes ? 'boxInfo boxInfo_active' : 'boxInfo'}
			>
				<h4>{title}</h4>
				<span>V</span>
			</div>
			{infoIncludes && (
				<div className='contentInfo'>
					{currentPlan.map((des) => {
						if (des.includes_description) {
							return <p>{des.includes_description}</p>
						}
						if (des.noIncludes_description) {
							return <p>{des.noIncludes_description}</p>
						}
						if (des.note) {
							return <p>{des.note}</p>
						}
						return null
					})}
				</div>
			)}
		</div>
	)
}
