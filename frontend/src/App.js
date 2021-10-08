import { City } from 'components/City'
import FloatingButtons from 'components/FloatingButtons'
import { HotelFeatures } from 'components/HotelFeatures'
import React from 'react'
import { Home } from './components/Home'
import { Tours } from './components/Tours'
import { Plans } from './components/Plans'
import { Footer } from './components/Footer'
import { Hotels } from './components/Hotels'
import { NavBar } from './components/NavBar'
import { Offers } from './components/Offers'
import { Transport } from './components/Transport'
import { PaymentMethods } from './components/PaymentMethods'
import { ToursDetails } from 'components/Tours/ToursDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
						<City />
						<Footer />
					</Route>
					<Route exact path='/hoteles/:locid/:hotelId'>
						<HotelFeatures />
						<Footer />
					</Route>
					<Route exact path='/transporte'>
						<Transport />
						<Footer />
					</Route>
					<Route exact path='/planes'>
						<Plans />
						<Footer />
					</Route>
					<Route exact path='/tours'>
						<Tours />
						<Footer />
					</Route>
					<Route exact path='/tours/:urlCode'>
						<ToursDetails />
						<Footer />
					</Route>
					<Route exact path='/ofertas'>
						<Offers />
						<Footer />
					</Route>
					<Route exact path='/medios-de-pago'>
						<PaymentMethods />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
