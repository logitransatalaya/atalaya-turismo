import styled from 'styled-components'
import bannerSalud from 'images/bannerSalud.png'

export const HealthHeaderContainer = styled.div`
	.contentBanner {
		background-image: url(${bannerSalud});
		width: 100%;
		height: 585px;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: right;
		background-attachment: fixed;
		margin-bottom: 2em;
	}
`
