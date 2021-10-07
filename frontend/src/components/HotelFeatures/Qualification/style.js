import styled from 'styled-components'

export const ContainerStars = styled.div`
	padding: 25px 10px;

	div {
		display: flex;
		gap: 0.3em;
	}
	& svg {
		color: #c7c7c7;
		/* cursor: pointer; */
	}
	& div {
		width: 120px;
	}

	/* & div:hover svg {
		color: rgb(212, 180, 0);
	}

	& svg:hover ~ svg {
		color: #c7c7c7;
	} */
	.clickedstar {
		color: rgb(212, 180, 0);
	}
`
