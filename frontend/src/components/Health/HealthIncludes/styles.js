import styled from 'styled-components'

export const HealthIncludesStyles = styled.div`
	padding: 1em;

	.desc {
		background-color: #2b9fc4;
		display: grid;
		grid-template-columns: 1fr auto 3fr;
		height: 200px;
		border-radius: 1em;
		align-items: center;
		position: relative;

		.text-m {
			display: none;
		}

		@media (max-width: 1000px) {
			column-gap: 1em;
			font-size: 10px;
		}

		@media (max-width: 600px) {
			grid-template-columns: 1fr;
			padding: 1em 5em;

			.text-d {
				display: none;
			}

			.text-m {
				display: block;
			}
		}

		.box_icon {
			margin: 0 auto;
			width: 40%;

			svg {
				fill: #fff;
				padding: 0.5em;
			}

			@media (max-width: 600px) {
				background-color: #10216f;
				position: absolute;
				width: 60px;
				height: 60px;
				right: 0;
				top: -5.5em;
				padding: 1em;
				border-radius: 50%;
			}
		}

		.box_line {
			height: 70%;
			width: 2px;
			background-color: #fff;

			@media (max-width: 600px) {
				display: none;
			}
		}

		.box_desc {
			display: flex;
			justify-content: center;
			align-items: center;

			p {
				color: #fff;
				font-size: 2rem;

				@media (max-width: 1000px) {
					column-gap: 1em;
					font-size: 1.7rem;
				}

				@media (max-width: 600px) {
					font-size: 1.2rem;
				}
			}
		}
	}

	.includes {
		.title {
			color: #2b9fc4;
			padding-left: 1em;
			font-size: 2rem;
		}

		.box_includes {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 10em;

			li {
				color: #2b9fc4;
				font-size: 1.3rem;

				span {
					display: block;
					color: #000;
					margin-bottom: 1em;
				}
			}

			@media (max-width: 600px) {
				grid-template-columns: 1fr;
				column-gap: 0;
				padding-left: 5em;
			}
		}
	}
`
