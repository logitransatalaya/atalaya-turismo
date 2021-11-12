import { StyledButton } from './styles'

export const ButtonHandleNav = ({ handleNav, handleOpenNav }) => {
	const styleToggle = handleNav ? 'toggle active' : 'toggle'

	return (
		<StyledButton onClick={() => handleOpenNav(!handleNav)}>
			<div className={styleToggle}></div>
		</StyledButton>
	)
}
