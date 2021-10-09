import styled from 'styled-components'

export const CurrentPlanConatainer = styled.div`
	.currentPlan_title {
		h2 {
			text-transform: uppercase;
			letter-spacing: 2px;
			padding-left: 2em;
			font-size: 2rem;
			color: #10216f;
		}

		@media (max-width: 600px) {
			h2 {
				font-size: 1.5rem;
			}
			.line {
				margin: 0 auto;
				width: 90%;
				height: 5px;
				background: rgb(244, 135, 0);
				background: linear-gradient(
					90deg,
					rgba(244, 135, 0, 1) 0%,
					rgba(255, 231, 0, 1) 85%
				);
			}
		}
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
		p {
			color: #10216f;
			font-size: 1.5rem;
			padding: 0 1em;
			text-align: justify;
		}
		@media (max-width: 600px) {
			p {
				font-size: 1.1rem;
			}
		}
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

			@media (max-width: 600px) {
				column-gap: 1em;
			}

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

	.contentMovile_s {
		background-color: #fff;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.1em;
		margin-bottom: 0.1em;

		.boxInfo {
			display: flex;
			justify-content: space-evenly;
			align-items: center;

			span {
				color: orange;
				font-size: 1.2em;
				font-weight: bold;
				transform: rotate(180deg);
				transition: transform 0.5s;
			}
		}

		.boxInfo_active {
			span {
				transform: rotate(0deg);
			}
		}

		.includesMovile_s {
			background-color: #10216f;
			width: 100%;
			text-align: center;
			color: #fff;
			transition: background-color 0.5s;
		}

		.noIncludesMovile_s {
			background-color: #10216f;
			width: 100%;
			text-align: center;
			color: #fff;
			transition: background-color 0.5s;
		}

		.notesMovile_s {
			background-color: #10216f;
			width: 100%;
			text-align: center;
			color: #fff;
			position: relative;
			transition: background-color 0.5s;
		}

		.bg_active {
			background-color: #0a164b;
		}
	}
`
