import styled from 'styled-components'

export const StyleNavbar = styled.div`
	background-color: #0f216f;

	.navbar {
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.box_imgLogo {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 75%;
			img {
				width: 100%;
				height: 86%;
			}
		}
		.content_options {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;
			height: 100%;
			margin-bottom: 25px;
			margin-right: 50px;

			.navigation {
				display: flex;
				gap: 0.6rem;
				list-style: none;
				li {
					a {
						text-decoration: none;
						color: #ff8b1e;
						font-weight: 700;
						font-size: 1rem;

						&:hover {
							color: orange;
						}
					}
				}
			}
		}

		@media (max-width: 840px) {
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

			.box_imgLogo {
				height: auto;

				img {
					width: 70%;
				}
			}

			.content_options {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 50%;
				margin-right: 0;

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
							font-size: 19px;
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

	@media (max-width: 840px) {
		display: block;
	}
`
