import React from 'react'
import { Home } from './components/Home'
import { Tours } from './components/Tours'
import { Plans } from './components/Plans'
import { Hotels } from './components/Hotels'
import { Offers } from './components/Offers'
import { HotelsList } from 'components/Hotels/HotelsList'
import { DetailsPlan } from 'components/Plans/DetailsPlan'
import { ToursDetails } from 'components/Tours/ToursDetails'
import { Footer } from './components/GlobalComponents/Footer'
import { NavBar } from './components/GlobalComponents/NavBar'
import { HotelFeatures } from 'components/Hotels/HotelFeatures'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FloatingButtons from 'components/GlobalComponents/FloatingButtons'

export default function App() {
	return (
		<Router>
			<div>
				<FloatingButtons />
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
				</Switch>
			</div>
		</Router>
	)
}
