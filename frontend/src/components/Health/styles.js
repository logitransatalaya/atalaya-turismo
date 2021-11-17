import styled from 'styled-components'
import image from '../../images/imagen-medico.png'

export const StyleHealth = styled.div`
	.bg {
		display: flex;
		justify-content: center;
		padding-bottom: 2rem;

		button {
			width: 70%;
		}
	}

	.Healt_content {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		margin: 1rem 0rem;
		width: 98%;
	}

	.bg-image {
		margin-top: 2rem;
		background-image: url(${image});
		background-size: cover;
		min-height: 600px;
		background-repeat: no-repeat;

		@media (max-width: 600px) {
			background-image: none;
		}
	}

	.healt_title {
		color: #53a8c6;
		font-weight: 600;
		font-size: 3rem;
		text-align: center;
	}

	@media (min-width: 950px) {
		.bg {
			button {
				width: 25%;
			}
		}

		.healt_title {
			text-align: left;
			margin: 0em 0em 0em 2em;
		}

		.Healt_content {
			height: 100%;
			width: 65%;
		}

		.Healt_content_button {
			.bg {
				justify-content: flex-end;
				display: flex;
				align-items: flex-end;
			}
		}
	}

	@media (min-width: 700px) {
		.bg-image {
			padding-top: 4rem;
			margin-top: 2rem;
			background-image: url(${image});
			background-size: cover;
			min-height: 600px;
			background-repeat: no-repeat;
		}
	} ;
`
