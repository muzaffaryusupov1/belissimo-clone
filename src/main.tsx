import '@/assets/style/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.tsx'

createRoot(document.querySelector('.wrapper')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
)
