import styled from 'styled-components'

export const CurrentPlanConatainer = styled.div`
	.currentPlan_title {
		text-transform: uppercase;
		letter-spacing: 2px;
		padding-left: 2em;
		font-size: 2rem;
		color: #10216f;
	}

	.containerImages {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
		padding: 1em;
		background-color: #fff;
		img {
			width: 100%;
			height: 300px;
			object-fit: cover;
			object-position: center;
			border-radius: 1em;
		}
	}

	.currentPlan_desc {
		color: #10216f;
		font-size: 1.5rem;
		padding: 0 1em;
	}
`
export const CurrentPlanServices = styled.div`
	background-color: #f7f7f7;

	.contentMax_services {
		max-width: 1350px;
		margin: 0 auto;
		padding: 1em;
		h2 {
			color: orange;
			padding-left: 2em;
		}

		.services_content {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			padding: 0 4em;

			.box_services {
				padding-bottom: 1.5em;

				span {
					color: #10216f;
					font-size: 1.3rem;
				}
			}
		}

		.box_buttons {
			display: flex;
			justify-content: space-around;
			padding: 3em 0;

			span {
				background-color: #10216f;
				color: #fff;
				font-weight: bold;
				display: block;
				padding: 10px 20px;
				border-radius: 5px;
				cursor: pointer;
				transition: transform 0.5s, opacity 0.5s;

				&:active {
					transform: scale(0.9);
				}

				&:hover {
					opacity: 0.9;
				}
			}
		}
	}
`
