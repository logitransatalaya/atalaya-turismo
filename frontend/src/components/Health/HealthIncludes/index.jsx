import React from 'react'
import { HealthIncludesStyles } from './styles'
import { ReactComponent as IconSalud } from '../../../images/iconSaludWhite.svg'

export const HealthIncludes = () => {
	return (
		<HealthIncludesStyles>
			<div className='healtInl_grid'>
				<div className='desc'>
					<div className='box_icon'>
						<IconSalud />
					</div>
					<div className='box_line'></div>
					<div className='box_desc'>
						<p className='text'>
							Con el turismo médico nuestro principal objetivo es
							cuidar de tu salud, por eso para nosotros es vital
							acompañarte en este proceso.
						</p>
					</div>
				</div>
				<div className='includes'>
					<h2 className='title'>Incluye</h2>
					<ul className='box_includes'>
						<li>
							<span>Agendar citas con los especialistas</span>
						</li>
						<li>
							<span>Tiquetes aéreos</span>
						</li>
						<li>
							<span>
								Transporte-aeropuerto hotel-hotel aeropuerto
							</span>
						</li>
						<li>
							<span>Alojamiento y alimentación</span>
						</li>
						<li>
							<span>Asistencia y traslados a las citas</span>
						</li>
						<li>
							<span>Consultas con médicos certificados</span>
						</li>
						<li>
							<span>Clínicas especializadas</span>
						</li>
						<li>
							<span>Cuidados post-operatorios</span>
						</li>
					</ul>
				</div>
			</div>
		</HealthIncludesStyles>
	)
}
