import styled from 'styled-components'

export const CardStyle = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15);
	margin-top: 20px;
	border-radius: 20px;

	.btn_offert {
		background-color: orange;
		padding: 15px;
		border-radius: 15px;
		border: none;
		color: white;
		font-size: large;
		margin-bottom: 19px;
	}

	@media (max-width: 810px) {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
