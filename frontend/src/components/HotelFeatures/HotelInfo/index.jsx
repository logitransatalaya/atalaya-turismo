import React from 'react'
import { splideOptionsMessages } from 'lib/splide'
import { ContainerHotelInfo, Message } from './styles'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { ReactComponent as CajaTexto } from 'images/cajadetextoconusuario.svg'

const HotelInfo = () => {
	return (
		<ContainerHotelInfo>
			<div className='item1'>
				<div className='info'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Tenetur vero voluptates ex fuga natus animi, maxime
						dolor laborum. Libero vero modi magni dolorem, error
						ducimus. Animi ducimus odio cupiditate fuga?
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Expedita, nemo neque! Amet magnam magni eveniet earum
						excepturi placeat iusto repellat aliquam porro et labore
						reiciendis architecto, corporis quibusdam incidunt modi?
					</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Perferendis neque nihil aliquid ut sed illo ipsum
						consectetur nobis cupiditate? Nesciunt beatae, enim
						quibusdam a quisquam alias aut voluptatibus. Ducimus,
						mollitia.
					</p>
				</div>
			</div>
			<div className='item2'>
				{/* slider */}
				<div className='sliderContain'>
					<Splide options={splideOptionsMessages} className='splideC'>
						<SplideSlide className='center'>
							<Message>
								<CajaTexto className='cajatexto' />
								<p className='text'>
									Excelente personal!!! y el hotel está muy
									bonito y centrico
								</p>
								<span className='name'>Laura</span>
							</Message>
						</SplideSlide>
						<SplideSlide className='center'>
							<Message>
								<CajaTexto className='cajatexto' />
								<p className='text'>
									"muy buena ubicación el personal muy amable
									lo recomendare a mis amistades"
								</p>
								<span className='name'>Carlos</span>
							</Message>
						</SplideSlide>
						<SplideSlide className='center'>
							<Message>
								<CajaTexto className='cajatexto' />
								<p className='text'>la buena pai</p>
								<span className='name'>brayan</span>
							</Message>
						</SplideSlide>
						<SplideSlide className='center'>
							<Message>
								<CajaTexto className='cajatexto' />
								<p className='text'>
									services hotel esta manejando services
								</p>
								<span className='name'>Brayan</span>
							</Message>
						</SplideSlide>
						<SplideSlide className='center'>
							<Message>
								<CajaTexto className='cajatexto' />
								<p className='text'>
									ya la rompieron por que la estructura no es
									la misma
								</p>
								<span className='name'>Camilo</span>
							</Message>
						</SplideSlide>
						<SplideSlide className='center'>
							<Message>
								<CajaTexto className='cajatexto' />
								<p className='text'>un objeto mor</p>
								<span className='name'>Fabian</span>
							</Message>
						</SplideSlide>
						<SplideSlide className='center'>
							<Message>
								<CajaTexto className='cajatexto' />
								<p className='text'>
									hagamos un framework y le ponemos
									ja-bra-ca-lixto.js
								</p>
								<span className='name'>Kalixto</span>
							</Message>
						</SplideSlide>
					</Splide>
				</div>
			</div>
		</ContainerHotelInfo>
	)
}

export default HotelInfo
