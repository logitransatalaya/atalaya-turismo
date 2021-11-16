export async function api({ url1, url2, url3 }) {
	try {
		if (url1 && url2 && url3) {
			const response = await fetch(
				`https://django.atalayaviajesyturismo.com/api/${url1}/${url2}/${url3}`
			)
			const data = await response.json()
			if (Object.values(data).every((x) => !x.length)) {
				return undefined
			}
			return data
		}
		if (url1 && url2) {
			const response = await fetch(
				`https://django.atalayaviajesyturismo.com/api/${url1}/${url2}`
			)
			const data = await response.json()
			if (Object.values(data).every((x) => !x.length)) {
				return undefined
			}
			return data
		}
		if (url1) {
			const response = await fetch(
				`https://django.atalayaviajesyturismo.com/api/${url1}/`
			)
			const data = await response.json()
			if (Object.values(data).every((x) => !x.length)) {
				return undefined
			}
			return data
		}
	} catch (error) {
		console.error(error)
	}
}
