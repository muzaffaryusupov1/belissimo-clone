import { Toaster } from '@/components/ui/sonner'
import { Outlet } from 'react-router'
import { Header } from './components'
import { MiniModal } from './components/modals'
import MobileSheet from './components/modals/mobile-sheet'

const App = () => {
	return (
		<>
			<MiniModal />
			<MobileSheet />
			<Header />
			<Outlet />
			<Toaster />
		</>
	)
}

export default App
