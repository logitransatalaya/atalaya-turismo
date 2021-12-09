import { useDispatch } from 'react-redux'
import { handleFontElementList } from 'state/actions/toolTipActions'

export const useGoogleTranslate = (currentPath) => {
	const dispatch = useDispatch()

	//fing all the <font> elements from a specify part of the app and save an a state
	const getFontElements = () => {
		const element = document.getElementById(currentPath)
		if (element) {
			const fontElements = element.getElementsByTagName('font')

			if (fontElements.length > 0)
				dispatch(handleFontElementList(Array.from(fontElements)))
		}
	}

	const dropFontElements = (fontElementsList) => {
		if (fontElementsList?.length > 0) {
			fontElementsList.forEach((element) => {
				const parentNode = element.parentNode.parentNode

				parentNode?.removeChild(element.parentNode)
			})
			dispatch(handleFontElementList(null))
		}
	}

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

				if (
					node.nodeName === 'DIV' &&
					node.children[0]?.nodeName === 'B'
				) {
					if (currentPath) getFontElements()
				}
			}
		})
	})

	return {
		mutationObserver,
		dropFontElements
	}
}
