import { types } from '../actions/hotelsActions'

export const initial_state = {
	login: false,
	locations: [
		{
			id: 1,
			title: 'medellin',
			urlImg: 'https://i.ibb.co/Srys23k/1-medellin.jpg',
			hotels: [
				{
					id: 1,
					idLocation: 1,
					name: 'hotel 1',
					urlImg: 'https://i.ibb.co/JtXZSM0/1-hotel-Sucio.jpg',
					addres: 'calle 1 carrera 45',
					calification: 4,
					price: '120.000',
					more: {
						services: [
							{
								id: 1,
								iconName: 'IconTasa',
								text: 'Desayuno incluido'
							},
							{
								id: 2,
								iconName: 'IconGota',
								text: 'Limpieza de habitación'
							},
							{ id: 3, iconName: 'IconCopa', text: 'Bar' },
							{ id: 4, iconName: 'IconWifi', text: 'Wifi' },
							{
								id: 5,
								iconName: 'IconRecepcion',
								text: 'Recepción 24 horas'
							},
							{
								id: 6,
								iconName: 'IconHabitacion',
								text: 'Servicios de habitación'
							},
							{
								id: 7,
								iconName: 'IconAire',
								text: 'Aire acondicionado'
							},
							{
								id: 8,
								iconName: 'IconPiscina',
								text: 'Piscina'
							},
							{
								id: 9,
								iconName: 'IconParqueadero',
								text: 'Parqueadero gratis'
							},
							{
								id: 10,
								iconName: 'IconMascota',
								text: 'Nose admiten mascotas'
							},
							{
								id: 11,
								iconName: 'IconTurista',
								text: 'información turística'
							},
							{
								id: 12,
								iconName: 'IconTv',
								text: 'TV satelital'
							}
						],
						photos: {
							photos1: [
								'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg',
								'https://www.eluniversal.com.co/binrepository/1049x700/0c0/0d0/none/13704/PJFX/conrad-cartagena_3478046_20200811132538.jpg',
								'https://cnnespanol.cnn.com/wp-content/uploads/2021/06/2F210610151521-splurge-hotel-soneva-jani-super-tease.jpg?quality=100&strip=info',
								'http://static1.eskypartners.com/travelguide/vancouver-hotels.jpg'
							],
							photos2: [
								'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/17/26/1726359_v5.jpeg',
								'https://dondealojarseen.com/wp-content/uploads/2019/10/The-Charlee-Hotel.jpg',
								'https://exp.cdn-hotels.com/hotels/1000000/10000/9300/9257/52ecc395_y.jpg?impolicy=fcrop&w=500&h=333&q=high'
							]
						},
						description: '',
						comentens: ['', '', '']
					}
				},
				{
					id: 2,
					idLocation: 1,
					name: 'hotel 2',
					urlImg: 'https://i.ibb.co/wYj7cxK/1-hotel-Limpio.jpg',
					addres: 'avenida 12 circular 2',
					calification: 3,
					price: '140.000',
					more: {
						services: [
							{
								id: 1,
								iconName: 'IconTasa',
								text: 'Desayuno incluido'
							},
							{
								id: 2,
								iconName: 'IconGota',
								text: 'Limpieza de habitación'
							},
							{ id: 3, iconName: 'IconCopa', text: 'Bar' },
							{ id: 4, iconName: 'IconWifi', text: 'Wifi' }
						],
						photos: {
							photos1: [
								'https://cdn-3.expansion.mx/dims4/default/7dd1e2c/2147483647/strip/true/crop/1280x853+0+0/resize/1800x1200!/format/webp/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F68%2F8b%2F5faa52024be598130185eb70005d%2Fthe-royal-playa-del-carmen-quiet-pool-hr.jpeg',
								'https://cdn.forbes.com.mx/2020/07/hoteles-Grand-Velas-Resorts-e1596047698604-640x360.jpg',
								'https://exp.cdn-hotels.com/hotels/20000000/19300000/19295500/19295426/7ccfa5d3_z.jpg?impolicy=fcrop&w=500&h=333&q=medium',
								'http://static1.eskypartners.com/travelguide/vancouver-hotels.jpg'
							],
							photos2: [
								'https://www.aviatur.com/source/redes/hoteles-de-lujo-en-colombia-las-islas-cartagena-aviatur.jpg',
								'https://aws.admagazine.com/prod/designs/v1/assets/767x384/61423.jpg',
								'https://www.hola.com/imagenes/viajes/20190208137104/mejores-hoteles-tripadvisor-2019/0-645-792/mejores-hoteles-del-mundo-tripadvisor-m.jpg'
							]
						},
						description: '',
						comentens: ['', '', '']
					}
				}
			]
		},
		{
			id: 2,
			title: 'bogota',
			urlImg: 'https://i.ibb.co/d57Kjkk/2-bogota.jpg',
			hotels: [
				{
					id: 1,
					idLocation: 2,
					name: 'hotel 3',
					urlImg: 'https://i.ibb.co/3km1G11/2-hotel-Limpio.jpg',
					addres: 'calle 1 carrera 45',
					calification: 4,
					price: '220.000',
					more: {
						services: [
							{
								id: 8,
								iconName: 'IconPiscina',
								text: 'Piscina'
							},
							{
								id: 9,
								iconName: 'IconParqueadero',
								text: 'Parqueadero gratis'
							},
							{
								id: 10,
								iconName: 'IconMascota',
								text: 'Nose admiten mascotas'
							},
							{
								id: 11,
								iconName: 'IconTurista',
								text: 'información turística'
							},
							{
								id: 12,
								iconName: 'IconTv',
								text: 'TV satelital'
							}
						],
						photos: {
							photos1: [
								'https://content.r9cdn.net/kimg/bc/8d/61fbd6eee1b62569.png',
								'https://media-cdn.tripadvisor.com/media/photo-s/10/46/5a/d0/hotel-lucerna-tijuana.jpg',
								'https://s4p5s7j9.stackpathcdn.com/wp-content/uploads/2019/11/hotel-tijuana.jpeg',
								'http://www.balneariosmexico.com/IMG/arton1802.jpg'
							],
							photos2: [
								'https://media-cdn.tripadvisor.com/media/photo-s/02/fe/50/cb/hotel-lucerna.jpg',
								'https://dondealojarseen.com/wp-content/uploads/2019/10/The-Charlee-Hotel.jpg',
								'https://www.portafolio.co/files/article_multimedia/uploads/2021/06/07/60bedba57a5ae.jpeg'
							]
						},
						description: '',
						comentens: ['', '', '']
					}
				},
				{
					id: 1,
					idLocation: 2,
					name: 'hotel 4',
					urlImg: 'https://i.ibb.co/6YV957h/2-hotel-Sucio.jpg',
					addres: 'avenida 12 circular 2',
					calification: 3,
					price: '240.000',
					more: {
						services: [
							{
								id: 1,
								iconName: 'IconTasa',
								text: 'Desayuno incluido'
							},
							{
								id: 2,
								iconName: 'IconGota',
								text: 'Limpieza de habitación'
							},
							{ id: 3, iconName: 'IconCopa', text: 'Bar' },
							{ id: 4, iconName: 'IconWifi', text: 'Wifi' },
							{
								id: 9,
								iconName: 'IconParqueadero',
								text: 'Parqueadero gratis'
							},
							{
								id: 10,
								iconName: 'IconMascota',
								text: 'Nose admiten mascotas'
							},
							{
								id: 11,
								iconName: 'IconTurista',
								text: 'información turística'
							},
							{
								id: 12,
								iconName: 'IconTv',
								text: 'TV satelital'
							}
						],
						photos: {
							photos1: [
								'https://tecnohotelnews.com/wp-content/uploads/2020/04/hotel-atlantis-sanya.jpg',
								'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/b3/42/8b/underwater-suite-bedroom.jpg?w=900&h=-1&s=1',
								'https://cnnespanol.cnn.com/wp-content/uploads/2021/06/2F210610151521-splurge-hotel-soneva-jani-super-tease.jpg?quality=100&strip=info',
								'https://cdn.cnn.com/cnnnext/dam/assets/180329162346-the-palm-resort---underwater-suite-the-palm-large-169.jpg'
							],
							photos2: [
								'https://img.nh-hotels.net/nh_royal_urban_26-016-rooms.jpg?output-quality=70&resize=550:*&composite-to=center,center|550:278&background-color=white',
								'https://solucionesymediaciones.es/wp-content/uploads/2021/03/8904_TheWestinLima-ExecutiveSuiteRoom.CrditoTheWestinLimaHotel_amp_ConventionCenter.jpg',
								'https://exp.cdn-hotels.com/hotels/1000000/10000/9300/9257/52ecc395_y.jpg?impolicy=fcrop&w=500&h=333&q=high'
							]
						},
						description: '',
						comentens: ['', '', '']
					}
				}
			]
		},

		{
			id: 3,
			title: 'cali',
			urlImg: 'https://i.ibb.co/VmkLXt9/3-cali.jpg',
			hotels: [
				{
					id: 1,
					idLocation: 3,
					name: 'hotel 5',
					urlImg: 'https://i.ibb.co/yhMMxkH/3-hotel-Limpio.jpg',
					addres: 'calle 1 carrera 45',
					calification: 4,
					price: '220.000',
					more: {
						services: [
							{ id: 3, iconName: 'IconCopa', text: 'Bar' },
							{ id: 4, iconName: 'IconWifi', text: 'Wifi' },
							{
								id: 5,
								iconName: 'IconRecepcion',
								text: 'Recepción 24 horas'
							},
							{
								id: 6,
								iconName: 'IconHabitacion',
								text: 'Servicios de habitación'
							},
							{
								id: 7,
								iconName: 'IconAire',
								text: 'Aire acondicionado'
							},
							{
								id: 8,
								iconName: 'IconPiscina',
								text: 'Piscina'
							},
							{
								id: 9,
								iconName: 'IconParqueadero',
								text: 'Parqueadero gratis'
							}
						],
						photos: {
							photos1: [
								'https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
								'https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
								'https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
								'https://images.unsplash.com/photo-1582301217431-c5f83dfd8ec7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
							],
							photos2: [
								'https://i.pinimg.com/564x/5d/72/af/5d72af1ae9350157ac086211db168796.jpg',
								'https://i.pinimg.com/564x/5d/72/af/5d72af1ae9350157ac086211db168796.jpg',
								'https://i.pinimg.com/564x/5d/72/af/5d72af1ae9350157ac086211db168796.jpg',
								'https://i.pinimg.com/564x/5d/72/af/5d72af1ae9350157ac086211db168796.jpg'
							]
						},
						description: '',
						comentens: ['', '', '']
					}
				},
				{
					id: 2,
					idLocation: 3,
					name: 'hotel 6',
					urlImg: 'https://i.ibb.co/QbyS6JL/3-hotel-Sucio.jpg',
					addres: 'avenida 12 circular 2',
					calification: 3,
					price: '240.000',
					more: {
						services: [
							{
								id: 1,
								iconName: 'IconTasa',
								text: 'Desayuno incluido'
							},
							{
								id: 2,
								iconName: 'IconGota',
								text: 'Limpieza de habitación'
							},
							{ id: 3, iconName: 'IconCopa', text: 'Bar' },
							{ id: 4, iconName: 'IconWifi', text: 'Wifi' },
							{
								id: 5,
								iconName: 'IconRecepcion',
								text: 'Recepción 24 horas'
							},
							{
								id: 9,
								iconName: 'IconParqueadero',
								text: 'Parqueadero gratis'
							},
							{
								id: 10,
								iconName: 'IconMascota',
								text: 'Nose admiten mascotas'
							},
							{
								id: 11,
								iconName: 'IconTurista',
								text: 'información turística'
							},
							{
								id: 12,
								iconName: 'IconTv',
								text: 'TV satelital'
							}
						],
						photos: {
							photos1: [
								'https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg',
								'https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg',
								'https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg',
								'https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_960_720.jpg'
							],
							photos2: [
								'https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_960_720.jpg',
								'https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_960_720.jpg',
								'https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_960_720.jpg',
								'https://cdn.pixabay.com/photo/2015/09/28/21/32/the-palm-962785_960_720.jpg'
							]
						},
						description: '',
						comentens: ['', '', '']
					}
				}
			]
		},
		{
			id: 4,
			title: 'san andres',
			urlImg: 'https://i.ibb.co/Prd5StK/4-san-andres.jpg',
			hotels: [
				{
					id: 1,
					idLocation: 4,
					name: 'hotel 7',
					urlImg: 'https://i.ibb.co/K2zf5JT/4-hotel-Limpio.jpg',
					addres: 'calle 1 carrera 45',
					calification: 4,
					price: '220.000',
					more: {
						services: [
							{ id: 4, iconName: 'IconWifi', text: 'Wifi' },
							{
								id: 5,
								iconName: 'IconRecepcion',
								text: 'Recepción 24 horas'
							},
							{
								id: 6,
								iconName: 'IconHabitacion',
								text: 'Servicios de habitación'
							},
							{
								id: 7,
								iconName: 'IconAire',
								text: 'Aire acondicionado'
							},
							{
								id: 9,
								iconName: 'IconParqueadero',
								text: 'Parqueadero gratis'
							},
							{
								id: 10,
								iconName: 'IconMascota',
								text: 'Nose admiten mascotas'
							},
							{
								id: 11,
								iconName: 'IconTurista',
								text: 'información turística'
							},
							{
								id: 12,
								iconName: 'IconTv',
								text: 'TV satelital'
							}
						],
						photos: {
							photos1: [
								'https://images.unsplash.com/photo-1624481431907-12efe69217c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80',
								'https://images.unsplash.com/photo-1624481431907-12efe69217c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80',
								'https://images.unsplash.com/photo-1624481431907-12efe69217c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80',
								'https://images.unsplash.com/photo-1624481431907-12efe69217c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80'
							],
							photos2: [
								'https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_960_720.jpg',
								'https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_960_720.jpg',
								'https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_960_720.jpg',
								'https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_960_720.jpg'
							]
						},
						description: '',
						comentens: ['', '', '']
					}
				},
				{
					id: 2,
					idLocation: 4,
					name: 'hotel 8',
					urlImg: 'https://i.ibb.co/L8q62XT/4-hotel-Sucio.jpg',
					addres: 'avenida 12 circular 2',
					calification: 3,
					price: '240.000',
					more: {
						services: [
							{
								id: 2,
								iconName: 'IconGota',
								text: 'Limpieza de habitación'
							},
							{ id: 3, iconName: 'IconCopa', text: 'Bar' },
							{ id: 4, iconName: 'IconWifi', text: 'Wifi' },
							{
								id: 5,
								iconName: 'IconRecepcion',
								text: 'Recepción 24 horas'
							},
							{
								id: 6,
								iconName: 'IconHabitacion',
								text: 'Servicios de habitación'
							},
							{
								id: 7,
								iconName: 'IconAire',
								text: 'Aire acondicionado'
							},
							{
								id: 9,
								iconName: 'IconParqueadero',
								text: 'Parqueadero gratis'
							},
							{
								id: 10,
								iconName: 'IconMascota',
								text: 'Nose admiten mascotas'
							},
							{
								id: 11,
								iconName: 'IconTurista',
								text: 'información turística'
							},
							{
								id: 12,
								iconName: 'IconTv',
								text: 'TV satelital'
							}
						],
						photos: {
							photos1: [
								'https://i.pinimg.com/564x/7d/ca/fb/7dcafb1ec026eb48c3f6037150a09b3e.jpg',
								'https://i.pinimg.com/564x/7d/ca/fb/7dcafb1ec026eb48c3f6037150a09b3e.jpg',
								'https://i.pinimg.com/564x/7d/ca/fb/7dcafb1ec026eb48c3f6037150a09b3e.jpg',
								'https://i.pinimg.com/564x/7d/ca/fb/7dcafb1ec026eb48c3f6037150a09b3e.jpg'
							],
							photos2: [
								'https://i.pinimg.com/564x/47/5f/a9/475fa996d76973014605e7843cf07e61.jpg',
								'https://i.pinimg.com/564x/47/5f/a9/475fa996d76973014605e7843cf07e61.jpg',
								'https://i.pinimg.com/564x/47/5f/a9/475fa996d76973014605e7843cf07e61.jpg',
								'https://i.pinimg.com/564x/47/5f/a9/475fa996d76973014605e7843cf07e61.jpg'
							]
						},
						description: '',
						comentens: ['', '', '']
					}
				}
			]
		}
	],
	hotelsCity: [],
	servicesHotel: []
}

export const homeReducer = (state = initial_state, action) => {
	switch (action.type) {
		case types.GET_HOTELS:
			return {
				...state,
				hotelsCity: state.locations.filter(
					(loc) => loc.id === action.payload
				)
			}

		case types.GET_SERVICES_HOTEL:
			return {
				...state,
				servicesHotel: action.payload
			}

		default:
			return state
	}
}
