import styled from 'styled-components'
import bannerSaludD from 'images/bannerSalud.png'
import bannerSaludM from 'images/bannerSaludM.png'

export const HealthHeaderContainer = styled.div`
	.contentBanner {
		background-image: url(${bannerSaludD});
		width: 100%;
		height: 600px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin-bottom: 2em;

		@media (max-width: 600px) {
			background-image: url(${bannerSaludM});
			height: 250px;
			margin-bottom: 3em;
		}
	}
`
