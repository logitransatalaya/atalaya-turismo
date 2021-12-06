import React from 'react'
import { StyleSearch } from './style'

export const Search = ({
	searchText,
	handleInputChange,
	placeHolder,
	text
}) => {
	return (
		<StyleSearch>
			<div className='container'>
				<div className='title-container'>
					<h2 className='title'>{text}</h2>
				</div>
				<label className='input'>
					<input
						type='text'
						placeholder={placeHolder}
						name='searchText'
						autoComplete='off'
						value={searchText}
						onChange={handleInputChange}
						className='input_child'
					/>
					<span className='icon'>
						<img
							src='/hotels/lupa-blanca.png'
							alt=''
							className='img-icon'
						/>
					</span>
				</label>
			</div>
		</StyleSearch>
	)
}
