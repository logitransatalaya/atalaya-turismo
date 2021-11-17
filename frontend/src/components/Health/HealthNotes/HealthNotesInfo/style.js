import styled from 'styled-components'

export const StyleCard = styled.div`
	.row {
		display: flex;
		align-items: center;
		gap: 1rem;

		.icon__content {
			display: flex;
			align-items: center;
			width: 3rem;
			height: 3rem;

			.icon {
				width: 3rem;
				height: 50%;
			}
		}
	}

	.Healt_text {
		p {
			text-align: justify;
			margin: 0.1em;

			@media (min-width: 600px) {
				font-size: 1.3rem;
			}
		}
	}
`
