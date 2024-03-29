import React from 'react'
import { splideOptionsMessages } from 'lib/splide'
import { ContainerHotelInfo, Message } from './styles'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ReactComponent as IconUsuario } from 'images/svg/iconUsuario.svg'

const HotelInfo = ({ comentens, desc }) => {
	return (
		<ContainerHotelInfo>
			<div className='item1'>
				<div className='info'>
					<p>{desc}</p>
				</div>
			</div>
			<div className='item2'>
				{/* slider */}
				<div className='sliderContain'>
					<Splide options={splideOptionsMessages} className='splideC'>
						{comentens?.map((coment, i) => (
							<SplideSlide className='center' key={i}>
								<Message>
									<div className='box-message'>
										<p>{coment.content}</p>
									</div>
									<div className='name'>
										<div className='box-icon'>
											<IconUsuario />
										</div>
										<span>{coment.user_name}</span>
									</div>
								</Message>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</ContainerHotelInfo>
	)
}

export default HotelInfo
