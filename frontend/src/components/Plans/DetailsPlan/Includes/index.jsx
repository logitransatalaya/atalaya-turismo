import React from 'react'

export const Includes = ({ includes }) => {
	return (
		<div>
			{includes.map((service, i) => (
				<div key={i} className='box_services'>
					<span>
						{service.includes_description ||
							service.noIncludes_description}
					</span>
				</div>
			))}
		</div>
	)
}
