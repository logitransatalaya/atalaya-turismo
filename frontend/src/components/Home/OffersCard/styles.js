import styled from 'styled-components'

export const CardStyle = styled.div`
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
	margin-top: 20px;
	border-radius: 20px;

	@media (max-width: 810px) {
		width: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
