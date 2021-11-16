import { useDispatch } from 'react-redux'
import { getMessage } from 'state/actions/toolTipActions'

export const useWhatsapp = () => {
	const dispatch = useDispatch()

	const messageWhatsapp = (route, title, pageName) => {
		dispatch(
			getMessage({
				route: route,
				title: title,
				page: pageName
			})
		)
	}

	return { messageWhatsapp }
}
