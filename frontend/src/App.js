import React from 'react'
import { Home } from './components/Home'
import { Tours } from './components/Tours'
import { Plans } from './components/Plans'
import { Health } from 'components/Health'
import { Offers } from './components/Offers'
import { Cities } from './components/Hotels/Nationals'
import { NavBar } from 'components/GlobalComponents/NavBar'
import { PlansDetails } from 'components/Plans/PlansDetails'
import { ToursDetails } from 'components/Tours/ToursDetails'
import { Footer } from './components/GlobalComponents/Footer'
import ScrollToTop from 'components/GlobalComponents/ScrollToTop'
import { HotelsList } from 'components/Hotels/Nationals/HotelsList'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { HotelFeatures } from 'components/Hotels/Nationals/HotelFeatures'
import FloatingButtons from 'components/GlobalComponents/FloatingButtons'
import ScrollArrow from 'components/GlobalComponents/ScrollToTop/ScrollArrow'
import { CitiesInternational } from 'components/Hotels/International'

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
					<Route exact path='/paises'>
						<CitiesInternational />
						<Footer />
					</Route>
					<Route exact path='/ciudades'>
						<Cities idCitie={1} />
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
						<PlansDetails />
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
