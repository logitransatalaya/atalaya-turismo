import styled from 'styled-components'

export const StyleCard = styled.div`
	.row {
		display: grid;
		grid-template-columns: 1fr 4fr;
		align-items: center;
		padding: 0em 1.5em 1em 1em;
		.icon {
			height: 2.1rem;
			padding: 0rem 0em 0em 0em;
		}
	}

	.Healt_text {
		p {
			text-align: start;
			margin: 0.1em;
			@media (min-width: 600px) {
				font-size: 1.3rem;
			}
		}
	}

	@media (min-width: 600px) {
		.row {
			display: grid;
			grid-template-columns: 2fr 10fr;
			margin: auto;
			.icon {
				height: 2rem;
				padding: 1rem 0em 0em 0em;
			}
		}
	}
`
