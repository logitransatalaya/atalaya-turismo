import styled from 'styled-components'

export const ContainerCard = styled.div`
	width: 90%;
	height: 200px;
	background: orange;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	font-size: 1.2rem;
	padding: 10px 0;
	position: relative;
	margin-bottom: 40px;

	.plane {
		background: #10216f;
		width: 65px;
		height: 65px;
		position: absolute;
		border-radius: 32px;
		top: -30px;
		right: 20px;
	}

	.text {
		text-align: center;
		padding: 15px 0;

		p {
			margin: 0;
		}
	}

	.line {
		background: #707070;
		width: 80%;
		height: 2px;
	}

	.white {
		color: white;
	}

	.blue {
		color: #10216f;
	}

	.bold {
		font-weight: bold;
	}

	.reserve {
		text-transform: uppercase;
		background: #10216f;
		color: #fff;
		border: none;
		padding: 10px 0;
		width: 62%;
		font-weight: bold;
		border-radius: 10px;
	}

	@media (min-width: 700px) {
		flex-direction: row;
		justify-content: space-around;
		height: auto;
		padding: 20px 0;

		.plane {
			position: static;
		}

		.text {
			text-align: left;
		}

		.line {
			display: none;
		}

		.reserve {
			width: 20%;
			margin-left: 100px;
		}
	}
`
