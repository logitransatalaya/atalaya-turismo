import styled from 'styled-components'

export const ContainerCards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(210px, 1fr));
	gap: 1rem;
	justify-content: space-around;
	padding: 20px;
	flex-wrap: wrap;
	@media (max-width: 950px) {
		grid-template-rows: repeat(1);
		grid-template-columns: repeat(1, minmax(210px, 1fr));
	}
`
export const ContainerCardsInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	flex-wrap: wrap;
`
