export const getDataHotels = (array, name, setValue) => {
	if (name === '') {
		return []
	}

	name = name.toLowerCase()
	const data = array?.filter((data) => data.name.toLowerCase().includes(name))
	setValue(data)
}
