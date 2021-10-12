import styled from 'styled-components'

export const StyleHealth = styled.div`
	.healt_title {
		color: #53a8c6;
		font-weight: 600;
		font-size: 2rem;
		margin: 1em 0em 1em 2.4em;
	}
	@media (min-width: 600px) {
		.Healt_content_grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
		.Healt_content_button {
			display: grid;
			grid-template-rows: 1fr auto;
			.bg {
				justify-content: flex-end;
				display: flex;
				align-items: flex-end;
			}
		}
	}
`
