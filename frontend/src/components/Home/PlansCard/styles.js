import styled from 'styled-components'

export const PlansCardStyled = styled.a`
	background-color: white;
	border-radius: 5px;
	box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.575);
	display: flex;

	flex-direction: column;
	gap: 0.1rem;
	justify-content: center;
	margin-top: 1rem;

	padding: 0.8rem 0;
	text-align: center;
	text-decoration: none;
	width: 50%;

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
`
