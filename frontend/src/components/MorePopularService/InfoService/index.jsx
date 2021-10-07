import React from 'react'
import { Info } from './style'
import { ReactComponent as IconTv } from 'images/svg/iconTv.svg'
import { ReactComponent as IconTasa } from 'images/svg/iconTasa.svg'
import { ReactComponent as IconGota } from 'images/svg/iconGota.svg'
import { ReactComponent as IconCopa } from 'images/svg/iconCopa.svg'
import { ReactComponent as IconWifi } from 'images/svg/iconWifi.svg'
import { ReactComponent as IconAire } from 'images/svg/iconAire.svg'
import { ReactComponent as IconMapa } from 'images/svg/iconMapa.svg'
import { ReactComponent as IconPiscina } from 'images/svg/iconPiscina.svg'
import { ReactComponent as IconMascota } from 'images/svg/iconMascota.svg'
import { ReactComponent as IconRecepcion } from 'images/svg/iconRecepcion.svg'
import { ReactComponent as IconHabitacion } from 'images/svg/iconHabitacion.svg'
import { ReactComponent as IconParqueadero } from 'images/svg/iconParqueadero.svg'

const icons = {
	IconTasa,
	IconGota,
	IconWifi,
	IconHabitacion,
	IconAire,
	IconPiscina,
	IconParqueadero,
	IconMascota,
	IconMapa,
	IconTv,
	IconRecepcion,
	IconCopa
}

export const InfoService = ({ iconName, text }) => {
	const Component = icons[iconName] || null

	return (
		Component && (
			<Info>
				<div className='icon'>
					<Component />
				</div>
				<div className='text'>
					<p>{text}</p>
				</div>
			</Info>
		)
	)
}
