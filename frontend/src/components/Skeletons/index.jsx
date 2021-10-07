import React from 'react'
import { ToursSkeleton } from './ToursSkeleton'

export const Skeleton = ({ type }) => {
	return type === 'toursDescription' && <ToursSkeleton />
}
