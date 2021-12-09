import React from 'react'
import { Home } from './components/Home'
import { Tours } from './components/Tours'
import { Plans } from './components/Plans'
import { Health } from 'components/Health'
import { Offers } from './components/Offers'
import { NavBar } from 'components/GlobalComponents/NavBar'
import { PlansDetails } from 'components/Plans/PlansDetails'
import { ToursDetails } from 'components/Tours/ToursDetails'
import { Footer } from './components/GlobalComponents/Footer'
import { CitiesOrCountries } from './components/Hotels/Nationals'
import ScrollToTop from 'components/GlobalComponents/ScrollToTop'
import { HotelsList } from 'components/Hotels/Nationals/HotelsList'
import { CitiesInternational } from 'components/Hotels/International'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { HotelFeatures } from 'components/Hotels/Nationals/HotelFeatures'
import FloatingButtons from 'components/GlobalComponents/FloatingButtons'
import ScrollArrow from 'components/GlobalComponents/ScrollToTop/ScrollArrow'
import { GoogleTranslateContext } from 'components/GlobalComponents/GoogleTranslateContext'

export default function App() {
	return (
		<Router>
			<GoogleTranslateContext>
				<ScrollToTop />
				<FloatingButtons />
				<ScrollArrow />
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<Home />
						<Footer />
					</Route>
					<Route exact path='/continentes'>
						<CitiesInternational />
						<Footer />
					</Route>
					<Route exact path='/ciudades/:nacionality'>
						<CitiesOrCountries />
						<Footer />
					</Route>
					<Route exact path='/ciudades/hoteles/:nacionality/:city'>
						<HotelsList />
						<Footer />
					</Route>
					<Route
						exact
						path='/ciudades/hoteles/:nacionality/:city/:hotelId'
					>
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
			</GoogleTranslateContext>
		</Router>
	)
}
