import React from 'react'

export const IncludesMovile = ({ infoIncludes, handleContentInfo, title }) => {
	return (
		<div
			className={
				infoIncludes ? 'includesMovile_s bg_active' : 'includesMovile_s'
			}
			onClick={() => handleContentInfo('infoIncludes', !infoIncludes)}
		>
			<div
				className={infoIncludes ? 'boxInfo boxInfo_active' : 'boxInfo'}
			>
				<h4>{title}</h4>
				<span>V</span>
			</div>
			{infoIncludes && (
				<div className='contentInfo'>
					<p>Hola</p>
					<p>que</p>
					<p>hace</p>
					<p>Hola</p>
				</div>
			)}
		</div>
	)
}
