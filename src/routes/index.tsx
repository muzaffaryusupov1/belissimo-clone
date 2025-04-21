import App from '@/App'
import { AboutPage, CartPage, ComboPage, HomePage, NotFoundPage } from '@/pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: '', element: <HomePage /> },
			{ path: 'about', element: <AboutPage /> },
			{ path: '*', element: <NotFoundPage /> },
			{ path: '/cart', element: <CartPage /> },
			{ path: '/combo/:slug', element: <ComboPage /> },
		],
	},
])
