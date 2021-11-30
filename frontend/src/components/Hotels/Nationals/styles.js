import styled from 'styled-components'
import { animationAppear } from 'components/GlobalComponents/animations'

export const HotelsContainer = styled.div`
	min-height: 50vh;

	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		gap: 2rem;
		padding: 1rem;
		animation: ${animationAppear} 2s ease forwards;

		@media (max-width: 800px) {
			grid-template-columns: 1fr;
		}
	}
`
