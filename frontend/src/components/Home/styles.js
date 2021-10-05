import styled from 'styled-components'

export const HomeStyled = styled.div`
	.plansCard-container {
		min-height: 10rem;

		.plansCard-slide {
			display: flex;
			gap: 1rem;
		}

		.dotPaginations_color button {
			background-color: orange;
		}

		.dotPaginations_color .is-active {
			background-color: #e8641a !important;
		}
	}
`
