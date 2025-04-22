import PitsaService from '@/service/pitsa'
import { IPitsa } from '@/utils/types'
import { create } from 'zustand'

interface PitsaItemState {
	pitsaItem: IPitsa | null
	loading: boolean
	error: string | null
	getPitsaItem: (id: number) => Promise<void>
}

export const usePitsaItemStore = create<PitsaItemState>(set => ({
	pitsaItem: null,
	loading: false,
	error: null,

	getPitsaItem: async (id: number) => {
		set({ loading: true, error: null, pitsaItem: null })
		try {
			const response = await PitsaService.pitsaItem(id)
			const foundItem = response.data.find((item: IPitsa) => item.id === id)
			if (foundItem) {
				set({ pitsaItem: foundItem, loading: false })
			} else {
				set({ error: 'Item not found', loading: false })
			}
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
