import { StyledButton } from './styles'

export const ButtonHandleNav = ({ handleNav, handleOpenNav }) => {
	return (
		!handleNav && (
			<StyledButton onClick={() => handleOpenNav(!handleNav)}>
				<div className='toggle'></div>
			</StyledButton>
		)
	)
}
