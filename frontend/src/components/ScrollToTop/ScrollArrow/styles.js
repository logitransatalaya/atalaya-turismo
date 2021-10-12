import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const ArrowScroll = styled.div`
	width: 60px;
	height: 60px;
	color: #fff;
	background-color: orange;
	position: fixed;
	bottom: 100px;
	right: 50px;
	z-index: 1;
	border-radius: 30px;
	display: ${({ display }) => display};
	cursor: pointer;
	animation: ${fadeIn} 0.3s;
	transition: all 0.4s ease;
	justify-content: center;
	align-items: center;

	img {
		width: 70%;
	}

	&:hover {
		background-color: #10216f;
	}
`
