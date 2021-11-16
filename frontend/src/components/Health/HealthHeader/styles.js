import styled from 'styled-components'
import bannerSaludD from 'images/bannerSalud.png'
import bannerSaludM from 'images/bannerSaludM.png'

export const HealthHeaderContainer = styled.div`
	.contentBanner {
		margin-bottom: 2em;
		background-image: url(${bannerSaludD});
		background-position: center;
		background-size: cover;

		background-repeat: no-repeat;
		height: 40rem;
		width: 100%;

		@media (max-width: 600px) {
			background-image: url(${bannerSaludM});
			height: 250px;
			margin-bottom: 3em;
		}
	}
`
