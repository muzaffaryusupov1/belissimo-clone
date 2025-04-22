import PitsaService from '@/service/pitsa'
import { IPitsa } from '@/utils/types'
import { create } from 'zustand'

interface PitsaState {
	pitsa: IPitsa[]
	loading: boolean
	error: string | null
	getPitsaList: () => Promise<void>
}

export const usePitsaStore = create<PitsaState>(set => ({
	pitsa: [],
	loading: false,
	error: null,

	getPitsaList: async () => {
		set({ loading: true, error: null })

		try {
			const response = await PitsaService.pitsa()
			set({ pitsa: response.data, loading: false })
		} catch (error: unknown) {
			if (error instanceof Error) {
				set({ error: error.message, loading: false })
			} else {
				set({ error: 'Error', loading: false })
			}
		}
	},
}))
