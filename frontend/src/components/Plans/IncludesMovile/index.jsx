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
					{currentPlan.map((des) => (
						<p>
							{des.includes_description ||
								des.noIncludes_description ||
								des.note}
						</p>
					))}
				</div>
			)}
		</div>
	)
}
