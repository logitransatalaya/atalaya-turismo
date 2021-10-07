import React from 'react'
import { City } from 'components/City'
import { Home } from './components/Home'
import { Tours } from './components/Tours'
import { Plans } from './components/Plans'
import { Footer } from './components/Footer'
import { Hotels } from './components/Hotels'
import { NavBar } from './components/NavBar'
import { Offers } from './components/Offers'
import { Transport } from './components/Transport'
import { HotelFeatures } from 'components/HotelFeatures'
import { PaymentMethods } from './components/PaymentMethods'
import { ToursDetails } from 'components/Tours/ToursDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function App() {
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/hoteles'>
						<Hotels />
					</Route>
					<Route exact path='/hoteles/:locid'>
						<City />
					</Route>
					<Route exact path='/transporte'>
						<Transport />
					</Route>
					<Route exact path='/planes'>
						<Plans />
					</Route>
					<Route exact path='/tours'>
						<Tours />
					</Route>
					<Route exact path='/tours/:toursid'>
						<ToursDetails />
					</Route>
					<Route exact path='/ofertas'>
						<Offers />
					</Route>
					<Route exact path='/medios-de-pago'>
						<PaymentMethods />
					</Route>
					<Route exact path='/caracteristicas-de-hotel'>
						<HotelFeatures />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}
