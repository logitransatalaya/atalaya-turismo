import styled from 'styled-components'

export const PlansCardStyled = styled.a`
	background-color: white;
	border-radius: 5px;
	box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.275);
	display: flex;

	flex-direction: column;
	font-size: 1rem;
	gap: 0.1rem;
	justify-content: center;

	margin: 1.5rem 0;
	padding: 1.2rem 0;
	text-align: center;
	text-decoration: none;

	width: 30rem;

	&:hover {
		opacity: 0.8;
	}

	.plansCard-title {
		color: #0b1644;
		margin: 0;
		padding: 0;
	}

	.plansCard-plan {
		color: white;
		font-weight: 500;
		margin: 0;
		padding: 0;
	}

	.plansCard-orange {
		background-color: #e8641a;
	}

	.plansCard-yellow {
		background-color: #f4a719;
	}

	@media (min-width: 550px) {
		font-size: 1.5rem;
		gap: 1rem;
		padding: 2rem 0;
		margin: 1.5rem 0;
	}
`
