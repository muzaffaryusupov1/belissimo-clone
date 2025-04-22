import { Toaster } from '@/components/ui/sonner'
import { Outlet } from 'react-router'
import { Header } from './components'
import { MiniModal } from './components/modals'

const App = () => {
	return (
		<>
			<MiniModal />
			<Header />
			<Outlet />
			<Toaster />
		</>
	)
}

export default App
