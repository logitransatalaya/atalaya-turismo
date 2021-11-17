import styled from 'styled-components'

export const ToursSkeletonStyled = styled.div`
	margin: 0 auto;
	width: 100%;

	.desktop {
		display: none;
	}

	.responsive {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 930px) {
		.desktop {
			display: initial;
		}
		.responsive {
			display: none;
		}
	}

	@media (min-width: 1350px) {
		width: 70%;
	}
`
