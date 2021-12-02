import React from 'react'

export const ToursCharacteristics = ({ data }) => {
	return (
		<div>
			{data?.map((text, i) => (
				<p key={i}>
					<img
						src={`/tours/${
							text.icon_unique1
								? text.icon_unique1
								: text.icon_unique2
						}.svg`}
						alt=''
					/>
					{text.text_include_two || text.text_include}
				</p>
			))}
		</div>
	)
}
