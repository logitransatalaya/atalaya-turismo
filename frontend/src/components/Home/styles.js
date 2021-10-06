import styled from 'styled-components'

export const HomeStyled = styled.div`
	.recomendedCard-container {
		margin-top: 2rem;
	}

	.plansCard-slide {
		display: flex;
		gap: 1rem;
	}

	.dotPaginations_color button {
		background-color: orange;
		-top: 1rem;
	}

	.dotPaginations_color .is-active {
		background-color: #e8641a !important;
	}

	.viajes-slide {
		display: flex;
		gap: 6.3rem;
		justify-content: center;
	}

	@media (min-width: 950px) {
		.plansCard-container {
			margin: 2rem 0;
		}
	}
`
