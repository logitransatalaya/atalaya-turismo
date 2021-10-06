import { City } from 'components/City'
import { HotelFeatures } from 'components/HotelFeatures'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Hotels } from './components/Hotels'
import { NavBar } from './components/NavBar'
import { Offers } from './components/Offers'
import { PaymentMethods } from './components/PaymentMethods'
import { Plans } from './components/Plans'
import { Tours } from './components/Tours'
import { Transport } from './components/Transport'

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
					<Route exact path='/hoteles/:locid/:hotelId'>
						<HotelFeatures />
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
					<Route exact path='/ofertas'>
						<Offers />
					</Route>
					<Route exact path='/medios-de-pago'>
						<PaymentMethods />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}
