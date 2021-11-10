export async function api2({ url1, url2, url3 }) {
	try {
		if (url1 && url2 && url3) {
			const response = await fetch(
				`http://50.62.81.171:5000/api/${url1}/${url2}/${url3}`
			)
			const data = await response.json()
			return data
		}
		if (url1 && url2) {
			const response = await fetch(
				`http://50.62.81.171:5000/api/${url1}/${url2}`
			)
			const data = await response.json()
			return data
		}
		if (url1) {
			const response = await fetch(
				`http://50.62.81.171:5000/api/${url1}/`
			)
			const data = await response.json()
			return data
		}
	} catch (error) {
		console.error(error)
	}
}
