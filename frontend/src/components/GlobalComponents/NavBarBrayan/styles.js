import styled from 'styled-components'

export const StyleNavbarBrayan = styled.div`
	background-color: #0f216f;

	.navbar {
		height: 150px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.box_imgLogo {
			width: 150px;

			img {
				width: 100%;
			}
		}

		.content_options {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			height: 100%;

			.search {
				padding-top: 2em;
				input {
					outline: none;
					border: none;
					padding: 5px 10px;
					border-radius: 1em;
				}
			}

			.navigation {
				display: flex;
				list-style: none;

				li {
					margin-right: 1em;

					&:hover {
						opacity: 0.8;
					}

					a {
						text-decoration: none;
						color: orange;
						font-weight: bold;
					}
				}
			}
		}

		@media (max-width: 600px) {
			background-color: #0f216f;
			height: 100vh;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 70%;
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			z-index: 10000;
			box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
			margin-left: -100%;
			transition: margin-left 0.5s;

			.content_options {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 50%;

				.search {
					align-items: center;
					display: flex;
					text-align: center;
					justify-content: center;
					padding-top: 0;

					input {
						width: 80%;
						border: none;
						padding: 5px 10px;
						border-radius: 1em;
					}
				}

				.navigation {
					flex-direction: column;
					padding: 0;
					align-items: center;

					li {
						margin: 0;
						margin-top: 1em;

						a {
							text-decoration: none;
							color: orange;
						}
					}
				}
			}
		}
	}

	.navbar_active {
		margin-left: 0;
	}
`
export const StyleButton = styled.div`
	position: fixed;
	top: 1em;
	right: 1em;
	display: none;
	z-index: 1000;

	@media (max-width: 600px) {
		display: block;
	}
`
