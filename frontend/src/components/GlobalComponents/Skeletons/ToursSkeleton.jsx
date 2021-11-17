import React from 'react'
import { ToursSkeletonStyled } from './styles'
import ContentLoader from 'react-content-loader'

export const ToursSkeleton = () => {
	return (
		<ToursSkeletonStyled>
			<div className='desktop'>
				<ToursTitle />
				<ToursDescription />
				<ToursLists />
				<ToursUnique />
			</div>
			<div className='responsive'>
				<ToursResponsive />
			</div>
		</ToursSkeletonStyled>
	)
}

const ToursTitle = (props) => (
	<ContentLoader
		width='100%'
		height='100%'
		viewBox='0 0 800 90'
		backgroundColor='#f5f5f5'
		foregroundColor='#c4c4c4'
		{...props}
	>
		<rect x='0' y='60%' rx='16' ry='0' width='200' height='20' />
		<rect x='750' y='32%' rx='16' ry='16' width='45' height='45' />
		<rect x='0' y='98%' rx='16' ry='16' width='100%' height='2' />
	</ContentLoader>
)

const ToursDescription = (props) => (
	<ContentLoader
		width='100%'
		height='100%'
		viewBox='0 0 800 220'
		backgroundColor='#f5f5f5'
		foregroundColor='#c4c4c4'
		{...props}
	>
		<rect x='0' y='3%' rx='16' ry='16' width='350' height='130' />
		{/* lineas de texto */}
		<rect x='450' y='13%' rx='3' ry='3' width='340' height='8' />
		<rect x='450' y='19%' rx='3' ry='3' width='340' height='8' />
		<rect x='450' y='25%' rx='3' ry='3' width='340' height='8' />
		<rect x='450' y='31%' rx='3' ry='3' width='340' height='8' />
		<rect x='450' y='37%' rx='3' ry='3' width='340' height='8' />
		<rect x='450' y='43%' rx='3' ry='3' width='310' height='8' />
		<rect x='450' y='49%' rx='3' ry='3' width='220' height='8' />
	</ContentLoader>
)

const ToursLists = (props) => (
	<ContentLoader
		width='100%'
		height='100%'
		viewBox='0 0 800 180'
		backgroundColor='#f5f5f5'
		foregroundColor='#c4c4c4'
		{...props}
	>
		{/* cuadros de imagenes */}
		<rect x='0' y='20' rx='3' ry='3' width='20' height='20' />
		<rect x='0' y='50' rx='3' ry='3' width='20' height='20' />
		<rect x='0' y='80' rx='3' ry='3' width='20' height='20' />
		<rect x='0' y='110' rx='3' ry='3' width='20' height='20' />
		<rect x='0' y='140' rx='3' ry='3' width='20' height='20' />
		{/* lineas de texto */}
		<rect x='30' y='25' rx='3' ry='3' width='310' height='10' />
		<rect x='30' y='55' rx='3' ry='3' width='180' height='10' />
		<rect x='30' y='85' rx='3' ry='3' width='280' height='10' />
		<rect x='30' y='115' rx='3' ry='3' width='220' height='10' />
		<rect x='30' y='145' rx='3' ry='3' width='300' height='10' />
		{/*  */}
		{/* cuadros de imagenes */}
		<rect x='450' y='20' rx='3' ry='3' width='20' height='20' />
		<rect x='450' y='50' rx='3' ry='3' width='20' height='20' />
		<rect x='450' y='80' rx='3' ry='3' width='20' height='20' />
		<rect x='450' y='110' rx='3' ry='3' width='20' height='20' />
		<rect x='450' y='140' rx='3' ry='3' width='20' height='20' />
		{/* lineas de texto */}
		<rect x='480' y='25' rx='3' ry='3' width='300' height='10' />
		<rect x='480' y='55' rx='3' ry='3' width='170' height='10' />
		<rect x='480' y='85' rx='3' ry='3' width='280' height='10' />
		<rect x='480' y='115' rx='3' ry='3' width='220' height='10' />
		<rect x='480' y='145' rx='3' ry='3' width='300' height='10' />
	</ContentLoader>
)

const ToursUnique = (props) => (
	<ContentLoader
		width='100%'
		height='100%'
		viewBox='0 0 800 100'
		backgroundColor='#f5f5f5'
		foregroundColor='#c4c4c4'
		{...props}
	>
		{/*  */}
		{/*  */}
		<rect x='0' y='30' rx='3' ry='3' width='20' height='20' />
		<rect x='30' y='25' rx='3' ry='3' width='90%' height='10' />
		<rect x='30' y='45' rx='3' ry='3' width='50%' height='10' />
	</ContentLoader>
)

const ToursResponsive = (props) => {
	return (
		<ContentLoader
			viewBox='0 0 100 650'
			height='100%'
			width='80%'
			{...props}
		>
			<rect x='0' y='1%' rx='16' ry='0' width='35' height='15' />
			<rect x='85%' y='1%' rx='1' ry='1' width='15' height='10' />
			<rect x='0' y='3%' rx='1' ry='1' width='100%' height='1' />
			<rect x='0' y='4%' rx='1' ry='1' width='100%' height='60' />
			{/* texto */}
			<rect x='0' y='15%' rx='1' ry='1' width='100%' height='3' />
			<rect x='0' y='16%' rx='1' ry='1' width='100%' height='3' />
			<rect x='0' y='17%' rx='1' ry='1' width='100%' height='3' />
			<rect x='0' y='18%' rx='1' ry='1' width='100%' height='3' />
			<rect x='0' y='19%' rx='1' ry='1' width='100%' height='3' />
			{/*  */}
			<rect x='0' y='21%' rx='1' ry='1' width='30%' height='8' />
			{/*  */}
			<rect x='0' y='24%' rx='1' ry='1' width='8' height='8' />
			<rect x='10%' y='24.35%' rx='1' ry='1' width='90%' height='3' />
			<rect x='0' y='26%' rx='1' ry='1' width='8' height='8' />
			<rect x='10%' y='26.35%' rx='1' ry='1' width='90%' height='3' />
			<rect x='0' y='28%' rx='1' ry='1' width='8' height='8' />
			<rect x='10%' y='28.35%' rx='1' ry='1' width='90%' height='3' />
			<rect x='0' y='30%' rx='1' ry='1' width='8' height='8' />
			<rect x='10%' y='30.35%' rx='1' ry='1' width='90%' height='3' />
		</ContentLoader>
	)
}
