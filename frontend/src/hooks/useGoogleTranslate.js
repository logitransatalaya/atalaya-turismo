export const useGoogleTranslate = () => {
	// MutationOberserver istance for drop the google-banner and change img src
	const mutationObserver = new MutationObserver((mutationList) => {
		// get the img change the src and styles
		const [iconImg] = document.getElementsByClassName('goog-te-gadget-icon')
		iconImg?.setAttribute(
			'src',
			'https://cdn-icons-png.flaticon.com/512/323/323310.png'
		)

		iconImg?.setAttribute(
			'style',
			'width: 25px; height:100%; margin-left: 0.5rem'
		)

		// list of changes in the DOM
		mutationList.forEach((mutation) => {
			// validate is the element wad added
			if (mutation.addedNodes.length > 0) {
				const node = mutation.addedNodes[0]
				// filter the element that contain the banner
				if (
					node.nodeName === 'DIV' &&
					node.className === 'skiptranslate' &&
					node.dir.length === 0
				) {
					const childNode = node.children[0]

					// hidden the element and drop some unnecesary styles to the body
					childNode.style.display = 'none'
					document.body.style = null
				}
			}
		})
	})

	return {
		mutationObserver
	}
}
