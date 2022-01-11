import { animationUpload } from 'components/GlobalComponents/animations'
import styled from 'styled-components'

export const Slider = styled.div`
	width: 100%;
	margin: 40px 0;
	animation: ${animationUpload} 0.5s;
	position: relative;
	min-height: 10rem;

	@media (min-width: 900px) {
		width: 95%;
		min-height: 20rem;
		margin: 40px 30px 10px 30px;
	}
	@media (max-width: 650px) {
		margin: 0px 0;
	}
`
