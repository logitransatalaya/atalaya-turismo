import React from 'react'
import { Home } from './components/Home'
import { Tours } from './components/Tours'
import { Plans } from './components/Plans'
import { Health } from 'components/Health'
import { Hotels } from './components/Hotels'
import { Offers } from './components/Offers'
import ScrollToTop from 'components/ScrollToTop'
import { HotelsList } from 'components/Hotels/HotelsList'
import { DetailsPlan } from 'components/Plans/DetailsPlan'
import ScrollArrow from 'components/ScrollToTop/ScrollArrow'
import { ToursDetails } from 'components/Tours/ToursDetails'
import { Footer } from './components/GlobalComponents/Footer'
import { HotelFeatures } from 'components/Hotels/HotelFeatures'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar } from 'components/GlobalComponents/NavBar'
import FloatingButtons from 'components/GlobalComponents/FloatingButtons'

export default function App() {
	return (
		<Router>
			<ScrollToTop />
			<div>
				<FloatingButtons />
				<ScrollArrow />
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<Home />
						<Footer />
					</Route>
					<Route exact path='/hoteles'>
						<Hotels />
						<Footer />
					</Route>
					<Route exact path='/hoteles/:locid'>
						<HotelsList />
						<Footer />
					</Route>
					<Route exact path='/hoteles/:locid/:hotelId'>
						<HotelFeatures />
						<Footer />
					</Route>
					<Route exact path='/planes'>
						<Plans />
						<Footer />
					</Route>
					<Route exact path='/planes/:urlCode'>
						<DetailsPlan />
						<Footer />
					</Route>
					<Route exact path='/tours'>
						<Tours />
						<Footer />
					</Route>
					<Route exact path='/tours/:urlCode'>
						<ToursDetails />
					</Route>
					<Route exact path='/ofertas'>
						<Offers />
						<Footer />
					</Route>
					<Route exact path='/salud'>
						<Health />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
