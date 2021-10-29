// import React, { useState } from 'react'
// import { StyledButton } from './styles'

// export const ButtonHandleNav = () => {
// 	const [stateToggle, setStateToggle] = useState(true)

// 	const styleToggle = stateToggle ? 'toggle' : 'toggle active'

// 	return (
// 		<StyledButton onClick={() => setStateToggle(!stateToggle)}>
// 			<div className={styleToggle}></div>
// 		</StyledButton>
// 	)
// }

import { StyledButton } from './styles'

export const ButtonHandleNav = ({ handleNav, handleOpenNav }) => {
	const styleToggle = handleNav ? 'toggle active' : 'toggle'

	return (
		<StyledButton onClick={() => handleOpenNav(!handleNav)}>
			<div className={styleToggle}></div>
		</StyledButton>
	)
}
