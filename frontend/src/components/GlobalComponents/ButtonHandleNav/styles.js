import styled from 'styled-components'

export const StyledButton = styled.div`
	.toggle {
		position: relative;
		left: 0;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: 0.5s;
		background: #ff6c0c;
		border-radius: 50%;

		&::before {
			content: '';
			position: absolute;
			width: 30px;
			height: 3px;
			background-color: #fff;
			transform: translateY(-6px);
			transition: 0.5s;
		}

		&::after {
			content: '';
			position: absolute;
			width: 30px;
			height: 3px;
			background-color: #fff;
			transform: translateY(6px);
			transition: 0.5s;
		}
	}

	.active {
		&::before {
			transform: translateY(0px) rotate(45deg);
		}
		&::after {
			transform: translateY(0px) rotate(-45deg);
		}
	}
`
