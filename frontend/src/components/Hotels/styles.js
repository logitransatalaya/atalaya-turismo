import { animationAppear } from 'components/GlobalComponents/animations'
import styled from 'styled-components'
export const HotelsContainer = styled.div`
	min-height: 50vh;
	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: auto;
		gap: 1em;
		padding: 1.9em 1em 2em 1em;
		padding-bottom: 1em;
		animation: ${animationAppear} 2s ease forwards;

		@media (max-width: 800px) {
			grid-template-columns: 1fr;
		}
	}
`
