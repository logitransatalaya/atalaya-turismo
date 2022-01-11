import { animationAppear } from 'components/GlobalComponents/animations'
import styled from 'styled-components'

export const CardStyle = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
	border-radius: 20px;
	padding: 0.8rem;
	gap: 1rem;
	margin: 1rem 0;
	animation: ${animationAppear} 0.6s;
	height: 430px;
	h1 {
		margin: 0;
		width: 100%;
		font-size: 1.5rem;
		text-align: center;
		color: #0b1644;
	}

	.offersCard-imgContainer {
		height: 10rem;
		width: 100%;
		img {
			width: 100%;
			height: 170px;
			border-radius: 20px 20px 0 0;
		}
	}

	.offersCard-textContent {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;

		p {
			margin: 0;
			font-weight: 500;
		}
	}

	.offersCard-price {
		font-size: 1.1rem;
		color: #e8641a;
		font-weight: 600;

		.offersCard-imgIcon {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	.btn_offert {
		background-color: orange;
		padding: 15px;
		border-radius: 15px;
		border: none;
		color: white;
		font-size: 1rem;
		margin-bottom: 19px;
		width: 100%;
		margin: 0 auto;
		font-weight: 600;
		cursor: pointer;

		&:hover {
			opacity: 0.8;
		}
	}

	/* @media (max-width: 810px) {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	} */
`
