import styled from 'styled-components'

export const StyleSearch = styled.div`
	.container {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.title-container {
		display: flex;
		justify-content: center;
		align-items: center;

		.title {
			color: #0f216f;
			font-size: 2rem;
			margin-left: 5rem;
		}
	}
	.input {
		border-radius: 8px;
		border: solid 2px #0f216f;
		margin: 20px;
		height: 35px;
		width: max-content;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0rem;
		.input_child {
			margin: 0;
			padding: 0;
			border: none;
			height: 93%;
			padding-left: 6px;
			outline: none;
			background-color: transparent;
		}
		&:focus-within {
			background-color: #eee;
		}

		.icon {
			background-color: #0f216f;
			height: 100%;
			padding: 0 5px;
			display: flex;
			align-items: center;
			.img-icon {
				width: 100%;
				height: 80%;
			}
		}
	}
	@media (max-width: 800px) {
		.container {
			justify-content: center;
		}
		.input {
			width: 80%;
		}
		.title-container {
			display: flex;
			justify-content: center;
			align-items: center;

			.title {
				margin-left: 0rem;
			}
		}
	}
`
