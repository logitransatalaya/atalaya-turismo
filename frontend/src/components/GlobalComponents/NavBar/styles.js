import styled from 'styled-components'

export const StyleNavbar = styled.div`
	background-color: #0f216f;

	.navbar {
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.box_imgLogo {
			margin-left: 1rem;
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
					width: 90%;
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

	.topnav {
		background-color: inherit;
	}

	/* Style the links inside the navigation bar */
	.topnav a {
		display: block;
		color: #f2f2f2;
		text-align: center;
		text-decoration: none;
		font-size: 1rem;
	}

	/* Dropdown container - needed to position the dropdown content */
	.dropdown {
		float: left;
		overflow: hidden;
	}

	/* Style the dropdown button to fit inside the topnav */
	.dropdown .dropbtn {
		font-size: 1rem;
		border: none;
		outline: none;
		color: #ff8b1e;
		padding: 0px 5px;
		background-color: inherit;
		margin: 0;
		font-weight: 700;
	}

	/* Style the dropdown content (hidden by default) */
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	/* Style the links inside the dropdown */
	.dropdown-content a {
		float: none;
		color: black;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
	}

	.topnav a:hover,
	.dropdown:hover .dropbtn {
		background-color: inherit;
		color: #ff8b1e;
	}

	/* Add a grey background to dropdown links on hover */
	.dropdown-content a:hover {
		background-color: #0f216f;
		color: #ff8b1e;
	}

	/* Show the dropdown menu when the user moves the mouse over the dropdown button */
	.dropdown:hover .dropdown-content {
		display: block;
	}

	/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
	@media screen and (max-width: 100px) {
		.topnav a:not(:first-child),
		.dropdown .dropbtn {
			display: none;
		}
		.topnav a.icon {
			float: right;
			display: block;
		}
	}

	/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
	@media screen and (max-width: 400px) {
		.topnav.responsive {
			position: relative;
		}
		.topnav.responsive a.icon {
			position: absolute;
			right: 0;
			top: 0;
		}
		.topnav.responsive a {
			float: none;
			display: block;
			text-align: left;
		}
		.topnav.responsive .dropdown {
			float: none;
		}
		.topnav.responsive .dropdown-content {
			position: relative;
		}
		.topnav.responsive .dropdown .dropbtn {
			display: block;
			width: 100%;
			text-align: left;
		}
		.dropdown .dropbtn {
			font-size: 19px;
		}
		.dropdown-content {
			display: none;
			transition: all ease-in-out 2s;
			position: absolute;
			background-color: #f9f9f9;
			max-width: 240px;
			left: 15px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			z-index: 1;
		}
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
