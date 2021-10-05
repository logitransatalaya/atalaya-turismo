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
