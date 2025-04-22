import NavigationService from '@/service/navigation'
import { TypeNavigation } from '@/utils/types'
import { create } from 'zustand'

interface INavigationState {
	navs: TypeNavigation[] | null
	loading: boolean
	error: string | null
	getNavigationItems: () => Promise<void>
}

export const useNavigationStore = create<INavigationState>(set => ({
	navs: [],
	loading: false,
	error: null,

	getNavigationItems: async () => {
		set({ loading: true, error: null, navs: null })

		try {
			const response = await NavigationService.navigation()
			set({ navs: response.data, loading: false })
		} catch (error: unknown) {
			if (error instanceof Error) {
				set({ error: error.message, loading: false })
			} else {
				set({ error: 'Error', loading: false })
			}
		}
	},
}))
