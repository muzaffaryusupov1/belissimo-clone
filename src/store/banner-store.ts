import BannerService from '@/service/banner'
import { IBanner } from '@/utils/types'
import { create } from 'zustand'

interface BannerState {
	banner: IBanner[]
	loading: boolean
	error: string | null
	getBanners: () => Promise<void>
}

export const useBannerStore = create<BannerState>(set => ({
	banner: [],
	loading: false,
	error: null,

	getBanners: async () => {
		set({ loading: true, error: null })
		try {
			const response = await BannerService.banner()
			set({ banner: response.data, loading: false })
		} catch (error: unknown) {
			console.log(error)
			if (error instanceof Error) {
				set({ error: error.message, loading: false })
			} else {
				set({ error: 'Error', loading: false })
			}
		}
	},
}))
