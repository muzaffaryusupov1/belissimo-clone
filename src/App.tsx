import { Footer, Header } from './components'
import {
	ComboList,
	DessertList,
	DrinksList,
	NavigationBar,
	PitsaList,
	SaladList,
	SauceList,
	SnackList,
} from './pages/home'
import Banner from './pages/home/banner/Banner'
import Delivery from './pages/home/delivery/Delivery'

const App = () => {
	return (
		<div>
			<Header />
			<main className='main'>
				<Banner />
				<Delivery />
				<NavigationBar />
				<ComboList />
				<PitsaList />
				<SnackList />
				<DrinksList />
				<SaladList />
				<DessertList />
				<SauceList />
			</main>
			<Footer />
		</div>
	)
}

export default App
