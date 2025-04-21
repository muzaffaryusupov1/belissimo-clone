import { Outlet } from 'react-router'
import { Header } from './components'
import { MiniModal } from './components/modals'

const App = () => {
	return (
		<>
			<MiniModal />
			<Header />
			<Outlet />
		</>
	)
}

export default App
