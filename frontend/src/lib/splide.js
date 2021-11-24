export const splideOptions = {
	type: 'slide',
	width: '100%',
	perPage: 2,
	gap: '1rem',
	perMove: 1,
	arrows: false,
	pagination: false,
	autoplay: false,
	rewind: true,
	padding: {
		left: '0.2rem',
		right: '0.2rem'
	},
	classes: {
		pagination: 'splide__pagination dotPaginations_color'
	},
	breakpoints: {
		950: {
			perPage: 1,
			height: '10rem',
			pagination: true,
			autoplay: true,
			padding: {
				left: '0.8rem',
				right: '0.8rem'
			}
		}
	}
}

export const splideOptionsBedroomsModal = {
	type: 'slide',
	perPage: 1,
	speed: 600,
	interval: 200,
	gap: '2.5rem',
	arrows: false,
	padding: {
		left: '0.5rem',
		right: '0.5rem'
	}
}

export const splideOptionsOffers = {
	type: 'slide',
	perPage: 4,
	speed: 600,
	interval: 200,
	gap: '2.5rem',
	padding: {
		left: '0.5rem',
		right: '0.5rem'
	},
	classes: {
		pagination: 'splide__pagination dotPaginations_color'
	},
	breakpoints: {
		1150: {
			perPage: 3,
			gap: '2rem'
		},
		700: {
			type: 'loop',
			arrows: false,
			perPage: 2,
			gap: '2rem'
		},
		500: {
			type: 'loop',
			perPage: 1,
			arrows: false,
			padding: {
				left: '1rem',
				right: '1rem'
			}
		}
	}
}

export const splideOptionsLoop = {
	type: 'loop',
	perPage: 1,
	autoplay: true,
	interval: 7000,
	speed: 2000,
	arrows: false
}

export const splideOptionsBedrooms = {
	type: 'slide',
	gap: '0.5rem',
	perPage: 3,
	perMove: 1,
	breakpoints: {
		1000: {
			perPage: 2
		},
		750: {
			perPage: 1
		}
	}
}

export const splideOptionsMessages = {
	type: 'slide',
	perPage: 1,
	perMove: 1,
	gap: '2rem',
	arrows: false,
	width: '30em',
	height: 400,
	breakpoints: {
		700: {
			width: '15em',
			height: '450px',
			perPage: 1,
			arrows: true
		}
	}
}

export const splideOptionsOfferts = {
	type: 'slide',
	perPage: 1,
	perMove: 1,
	gap: '2rem'
}
