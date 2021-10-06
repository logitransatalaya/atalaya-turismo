import styled from 'styled-components'

export const ContainerCards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(210px, 1fr));
	justify-content: space-around;
	flex-wrap: wrap;
	@media (max-width: 950px) {
		grid-template-rows: repeat(1);
		grid-template-columns: repeat(1, minmax(210px, 1fr));
	}
`
