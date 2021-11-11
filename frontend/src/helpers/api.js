export async function api({ url1, url2, url3 }) {
	try {
		if (url1 && url2 && url3) {
			const response = await fetch(
				`https://django.atalayaviajesyturismo.com/api/${url1}/${url2}/${url3}`
			)
			const data = await response.json()
			return data
		}
		if (url1 && url2) {
			const response = await fetch(
				`https://django.atalayaviajesyturismo.com/api/${url1}/${url2}`
			)
			const data = await response.json()
			return data
		}
		if (url1) {
			const response = await fetch(
				`https://django.atalayaviajesyturismo.com/api/${url1}/`
			)
			const data = await response.json()
			console.log(data)
			return data
		}
	} catch (error) {
		console.error(error)
	}
}
