import React from 'react'

export const PlansImages = ({ currentPlan }) => {
	return (
		<div className='containerImages'>
			{currentPlan.photos.map((url, i) => {
				return <img key={i} src={url.url_img} alt={url.name_img} />
			})}
		</div>
	)
}
