import styled from 'styled-components'

export const BenefitsSectionStyled = styled.div`
	text-align: center;
	margin-top: 4rem;

	h3 {
		color: #10216f;
		font-size: 2rem;
	}

	.benefitsCards-container {
		padding: 0 1rem;
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: repeat(6, 1fr);
		gap: 1rem;
	}

	.benefitsSection-imageBackground {
		width: 100%;

		img {
			height: 100%;
			width: 100%;
		}
	}

	@media (min-width: 950px) {
		.benefitsCards-container {
			margin-top: 5rem;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 61% 60%;
			gap: 2rem;
		}

		.benefitsSection-imageBackground {
			margin-top: -15rem;
		}

		.line-separator {
			background-color: #10216f;
			height: 0.1rem;
		}
	}
`
