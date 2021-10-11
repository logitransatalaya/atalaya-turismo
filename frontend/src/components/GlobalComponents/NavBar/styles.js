import styled from 'styled-components'

export const NavbarStyled = styled.div`
	background-color: #10216f;
	.navBar-container {
		display: flex;
		justify-content: space-between;
		padding: 0.3rem 1rem;
		position: relative;
	}
	.logoContainer {
		align-items: center;
		display: flex;
		justify-content: center;
		width: 20%;
		img {
			width: 100%;
		}
	}
	.logoContainerMenu {
		align-items: center;
		display: flex;
		justify-content: center;
		width: 100%;
		img {
			width: 150px;
		}
	}
	.iconsContainer {
		align-items: center;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		width: 25%;
		.loginIcon {
			align-items: center;
			display: flex;
			justify-content: center;
			height: 50%;
			width: 100%;
			img {
				width: 100%;
			}
		}
		.burgerIcon {
			align-items: center;
			display: flex;
			height: 50%;
			justify-content: center;
			width: 100%;
			img {
				width: 100%;
			}
		}
	}
	.navbarDesktop {
		align-items: flex-start;
		display: flex;
		background-color: #10216f;
		flex-direction: column-reverse;
		gap: 1rem;
		min-height: 100vh;
		justify-content: flex-end;
		left: 0;

		padding: 1rem 0;
		padding-left: 2.5rem;
		position: fixed;
		transform: translateX(-105%);

		transition: ease-in-out 0.3s;
		top: 0;
		width: calc(70% - 2rem);
		z-index: 1000;
	}

	.navbarList {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin: 2rem 0;

		padding: 0;

		li {
			list-style: none;
		}

		a {
			color: #f4a719;
			font-weight: 500;
			text-decoration: none;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	.navbarButtonsContainer {
		color: white;
		display: flex;
		flex-direction: column;
		gap: 1rem;

		button {
			border: none;
			border-radius: 3px;
			color: white;
			padding: 0.5rem 1rem;

			&:hover {
				opacity: 0.8;
			}

			&:nth-of-type(1) {
				background-color: #0a1744;
			}
			&:nth-of-type(2) {
				background-color: #f4a719;
			}
		}
	}

	@media (min-width: 550px) {
		.logoContainer {
			padding: 0.5rem;
			width: 5rem;
		}
		.iconsContainer {
			align-items: center;
			display: flex;
			justify-content: space-between;
			gap: 1rem;

			width: 7rem;
		}

		.navbarDesktop {
			font-size: 1.3rem;
			width: calc(70% - 15rem);
		}
	}
	@media (min-width: 950px) {
		.logoContainer {
			padding: 0.5rem;
			width: 8rem;
		}

		.navbarDesktop {
			align-items: flex-end;
			flex-direction: column;
			font-size: 1rem;
			gap: 2rem;

			min-height: auto;
			justify-content: center;
			margin: 0.5rem 0;
			padding-left: 0;

			position: initial;
			transform: none;
			width: auto;

			.navbarButtonsContainer {
				color: white;
				flex-direction: row;
				gap: 1rem;
			}
		}

		.iconsContainer {
			display: none;
		}

		.navbarList {
			margin: 0;
			flex-direction: row;
		}
	}

	.navbarVisible {
		transform: translateX(0);
	}
`
