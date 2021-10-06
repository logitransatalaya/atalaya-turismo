import React from 'react'
import { InfoService } from './InfoService'
import { ContainerCards, ContainerCardsInfo } from './style'
import { ReactComponent as IconTv } from 'images/esfera-azul.svg'
import { ReactComponent as IconMapa } from 'images/icono-logo.svg'
import { ReactComponent as IconAire } from 'images/icono-mapa.svg'
import { ReactComponent as IconTasa } from 'images/iconAmount.svg'
import { ReactComponent as IconWifi } from 'images/icono-avion.svg'
import { ReactComponent as IconGota } from 'images/iconFacebook.svg'
import { ReactComponent as IconCopa } from 'images/iconInstagram.svg'
import { ReactComponent as IconPiscina } from 'images/icono-mundo.svg'
import { ReactComponent as IconRecepcion } from 'images/icono-barco.svg'
import { ReactComponent as IconMascota } from 'images/icono-palmera.svg'
import { ReactComponent as IconHabitacion } from 'images/icono-maleta.svg'
import { ReactComponent as IconParqueadero } from 'images/icono-palmera.svg'

export const MorePopularService = () => {
	return (
		<ContainerCards>
			<ContainerCardsInfo>
				<InfoService Icon={IconTasa} />
				<InfoService Icon={IconGota} />
				<InfoService Icon={IconCopa} />
				<InfoService Icon={IconWifi} />
			</ContainerCardsInfo>
			<ContainerCardsInfo>
				<InfoService Icon={IconRecepcion} />
				<InfoService Icon={IconHabitacion} />
				<InfoService Icon={IconAire} />
				<InfoService Icon={IconPiscina} />
			</ContainerCardsInfo>
			<ContainerCardsInfo>
				<InfoService Icon={IconMapa} />
				<InfoService Icon={IconTv} />
				<InfoService Icon={IconParqueadero} />
				<InfoService Icon={IconMascota} />
			</ContainerCardsInfo>
		</ContainerCards>
	)
}
