import React from 'react'
import { useHistory } from 'react-router'

export const GoBack = () => {
	const { goBack } = useHistory()

	return (
		<div className='goback-container' style={{ width: '2.5rem' }}>
			<img onClick={goBack} src='/goBack.svg' alt='go back' />
			<style jsx>
				{`
					.goback-container img {
						width: 100%;
						cursor: pointer;
					}

					.goback-container img:hover {
						opacity: 0.7;
					}
				`}
			</style>
		</div>
	)
}
