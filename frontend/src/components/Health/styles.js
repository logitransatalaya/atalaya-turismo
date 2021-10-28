import styled from 'styled-components'
import image from '../../images/imagen-medico.png'

export const StyleHealth = styled.div`
	.bg {
		display: flex;
		justify-content: center;
		padding-bottom: 2rem;
	}
	.Healt_content_grid {
		margin-top: 5rem;
	}
	.bg-image {
		padding-top: 4rem;
		margin-top: 2rem;
		background-image: url(${image});
		background-size: cover;
		min-height: 600px;
		background-repeat: no-repeat;
	}
	.healt_title {
		color: #53a8c6;
		font-weight: 600;
		font-size: 3rem;
		margin: 0em 0em 0em 2em;
	}
	@media (min-width: 950px) {
		.Healt_content_grid {
			height: 100%;
			display: grid;
			grid-template-columns: 2fr 1fr;
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
