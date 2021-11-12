import React from 'react'

export const ToursCharacteristics = ({ data, num }) => {
	return (
		<div>
			{data.map((text, i) => (
				<p key={i}>
					<img src={`/tours/column${num}-${i + 1}.svg`} alt='' />

					{text.text_include_two}
				</p>
			))}
		</div>
	)
}
