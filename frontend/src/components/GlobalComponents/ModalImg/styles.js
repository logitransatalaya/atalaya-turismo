import styled from 'styled-components'

export const StyleModalShow = styled.div`
	background-color: #0009;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		img {
			border-radius: 1em;
			max-height: 90vh;
			max-width: 90vw;
		}
	}
`
