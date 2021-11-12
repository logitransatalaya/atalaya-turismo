import styled from 'styled-components'

export const BenefitsCardStyled = styled.div`
	font-size: 1rem;
	color: ${(p) => (p.bg ? 'white' : '#0f216f')};
	border-radius: 20px;
	background-color: ${(p) => (p.bg ? '#0f216f' : 'white')};
	display: flex;
	gap: 0.9rem;
	text-align: center;
	padding: 1.1rem 0.5rem;

	.benefitsCard-icon {
		display: flex;
		flex-direction: column;
		justify-content: start;
		width: 9%;
	}

	.benefitsCard-icon svg {
		margin-top: 0px;
		fill: ${(p) => (p.bg ? 'white' : '#0f216f')};
	}

	.benefitsCard-textContent {
		text-align: left;
		flex-direction: column;
		display: flex;
		gap: 1rem;
		width: 100%;
	}

	.benefitsCard-title {
		margin: 0;
		color: ${(p) => (p.bg ? '#f3a719' : '#e8641a')};
		font-size: 1.5rem;
	}

	.benefitsCard-description {
		margin: 0;
		font-size: 1.1rem;
		width: 98%;
		font-weight: 600;
	}

	@media (min-width: 950px) {
		color: #0f216f;
		background-color: transparent;
		z-index: 100;

		.benefitsCard-title {
			font-size: 1.4rem;
			color: #e8641a;
		}

		.benefitsCard-description {
			font-size: 1.3rem;
		}

		.benefitsCard-icon svg {
			margin-top: 0px;
			fill: #0f216f;
		}
	}
`
