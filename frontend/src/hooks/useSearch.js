const { useState } = require('react')

export const useSearch = (initialState = '') => {
	const [text, setText] = useState(initialState)
	const handleInputChange = ({ target }) => {
		setText({
			...text,
			[target.name]: target.value
		})
	}
	return [text, handleInputChange]
}
