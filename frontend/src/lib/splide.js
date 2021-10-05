export const splideOptions = {
	type: 'slide',
	perPage: 2,
	gap: '1rem',
	perMove: 1,
	arrows: false,
	pagination: false,
	autoplay: false,
	rewind: true,
	padding: {
		left: '0.8rem',
		right: '0.8rem'
	},
	classes: {
		pagination: 'splide__pagination dotPaginations_color'
	},
	breakpoints: {
		950: {
			perPage: 1,
			height: '10rem',
			pagination: true,
			autoplay: true
		}
	}
}

export const splideOptionsOffers = {
	type: 'slide',
	perPage: 3,
	gap: '2.5rem',
	height: '45rem',
	padding: {
		left: '3rem',
		right: '3rem'
	},

	breakpoints: {
		1340: {
			perPage: 3
		},
		1010: {
			perPage: 2,
			gap: '6rem'
		},
		750: {
			perPage: 1,
			type: 'loop',
			gap: '8rem',
			height: '45rem',
			padding: {
				left: '1rem',
				right: '1rem'
			}
		}
	}
}
