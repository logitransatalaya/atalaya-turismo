import styled from 'styled-components'

export const BenefitsSectionStyled = styled.div`
	text-align: center;
	margin-top: 4rem;

	h3 {
		color: #10216f;
		font-size: 2rem;
	}

	.benefitsCards-container {
		display: grid;
		gap: 1rem;
		grid-template-columns: 100%;
		grid-template-rows: repeat(6, 1fr);

		padding: 0 1rem;
	}

	@media (min-width: 950px) {
		.benefitsCards-container {
			display: grid;
			gap: 2rem;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 61% 60%;

			margin-top: 5rem;
		}

		.line-separator {
			background-color: #10216f;
			height: 0.1rem;
		}
	}
`
