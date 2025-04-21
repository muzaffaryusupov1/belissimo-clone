import { Footer } from '@/components'
import {
	Banner,
	ComboList,
	Delivery,
	DessertList,
	DrinksList,
	NavigationBar,
	PitsaList,
	SaladList,
	SauceList,
	SnackList,
} from './components'

const HomePage = () => {
	return (
		<>
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
		</>
	)
}

export default HomePage
