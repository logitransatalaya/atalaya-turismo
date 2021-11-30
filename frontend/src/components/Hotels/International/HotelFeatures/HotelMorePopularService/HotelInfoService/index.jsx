import React from 'react'
import { Info } from './style'
import { ReactComponent as IconTv } from 'images/svg/iconTv.svg'
import { ReactComponent as IconTasa } from 'images/svg/iconTasa.svg'
import { ReactComponent as IconGota } from 'images/svg/iconGota.svg'
import { ReactComponent as IconCopa } from 'images/svg/iconCopa.svg'
import { ReactComponent as IconWifi } from 'images/svg/iconWifi.svg'
import { ReactComponent as IconAire } from 'images/svg/iconAire.svg'
import { ReactComponent as IconTurista } from 'images/svg/iconTurista.svg'
import { ReactComponent as IconPiscina } from 'images/svg/iconPiscina.svg'
import { ReactComponent as IconMascota } from 'images/svg/iconMascota.svg'
import { ReactComponent as IconPlaya } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconJacuzzi } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconRecepcion } from 'images/svg/iconRecepcion.svg'
import { ReactComponent as IconGimnasio } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconLimpieza } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconBalneario } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconHabitacion } from 'images/svg/iconHabitacion.svg'
import { ReactComponent as IconLavanderia } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconParqueadero } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconRestaurante } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconAlimentacion } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconJuegosDeMesa } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconCasaEnElArbol } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconFrenteLaPlaya } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconCentroDeBienestar } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconMovilidadReducida } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconHabitacionFamiliar } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconTrasladoAeropuerto } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconActividadesRecreativas } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconHabitacionesNoFumadores } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconTeteraCafeteraHabitaciones } from 'images/svg/iconParqueadero.svg'
import { ReactComponent as IconInstalacionesParaConferencia } from 'images/svg/iconParqueadero.svg'

const icons = {
	IconTasa,
	IconGota,
	IconCopa,
	IconWifi,
	IconRecepcion,
	IconHabitacion,
	IconAire,
	IconPiscina,
	IconParqueadero,
	IconMascota,
	IconTurista,
	IconTv,
	IconRestaurante,
	IconHabitacionFamiliar,
	IconActividadesRecreativas,
	IconLimpieza,
	IconAlimentacion,
	IconCasaEnElArbol,
	IconJuegosDeMesa,
	IconCentroDeBienestar,
	IconMovilidadReducida,
	IconFrenteLaPlaya,
	IconTrasladoAeropuerto,
	IconGimnasio,
	IconTeteraCafeteraHabitaciones,
	IconHabitacionesNoFumadores,
	IconJacuzzi,
	IconPlaya,
	IconInstalacionesParaConferencia,
	IconBalneario,
	IconLavanderia
}

export const HotelInfoService = ({ iconName, text }) => {
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
