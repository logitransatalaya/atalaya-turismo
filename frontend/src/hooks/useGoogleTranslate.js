export const useGoogleTranslate = (setIconElement) => {
	// MutationOberserver istance for drop the google-banner and change img src
	const mutationObserver = new MutationObserver((mutationList) => {
		//get the google-icon and save in a external state
		const [iconImg] = document.getElementsByClassName('goog-te-gadget-icon')
		setIconElement(iconImg)

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
				//remove a modal that show the traduction in the original language
				if (node.id === 'goog-gt-tt') {
					const parentNode = node.parentNode

					parentNode.removeChild(node)
				}
			}
		})
	})

	return {
		mutationObserver
	}
}
