import { types } from '../actions/homeActions'

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
					price: '120.000'
				},
				{
					id: 2,
					idLocation: 1,
					name: 'hotel 2',
					urlImg: 'https://i.ibb.co/wYj7cxK/1-hotel-Limpio.jpg',
					addres: 'avenida 12 circular 2',
					calification: 3,
					price: '140.000'
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
					price: '220.000'
				},
				{
					id: 1,
					idLocation: 2,
					name: 'hotel 4',
					urlImg: 'https://i.ibb.co/6YV957h/2-hotel-Sucio.jpg',
					addres: 'avenida 12 circular 2',
					calification: 3,
					price: '240.000'
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
					price: '220.000'
				},
				{
					id: 2,
					idLocation: 3,
					name: 'hotel 6',
					urlImg: 'https://i.ibb.co/QbyS6JL/3-hotel-Sucio.jpg',
					addres: 'avenida 12 circular 2',
					calification: 3,
					price: '240.000'
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
					price: '220.000'
				},
				{
					id: 2,
					idLocation: 4,
					name: 'hotel 8',
					urlImg: 'https://i.ibb.co/L8q62XT/4-hotel-Sucio.jpg',
					addres: 'avenida 12 circular 2',
					calification: 3,
					price: '240.000'
				}
			]
		}
	],
	hotelsCity: []
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
		default:
			return state
	}
}
