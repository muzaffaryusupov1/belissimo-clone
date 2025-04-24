import App from '@/App'
import {
	AboutPage,
	CartPage,
	ComboPage,
	ConstuctorPage,
	HomePage,
	LoginPage,
	NotFoundPage,
} from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: '/about/company', element: <AboutPage /> },
			{ path: '*', element: <NotFoundPage /> },
			{ path: '/cart', element: <CartPage /> },
			{ path: '/combo/:slug', element: <ComboPage /> },
			{ path: '/constructor', element: <ConstuctorPage /> },
			{ path: '/login', element: <LoginPage /> },
		],
	},
])
