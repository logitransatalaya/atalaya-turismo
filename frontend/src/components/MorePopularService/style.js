import styled from 'styled-components'

export const ContainerCards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;
	gap: 1em;
	@media (max-width: 950px) {
		grid-template-columns: 1fr;
		justify-content: space-between;
		align-items: center;
		width: 70%;
		margin: auto;
	}
`
