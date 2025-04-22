import ComboService from '@/service/combo'
import { ICombo } from '@/utils/types'
import { create } from 'zustand'

interface ComboItemState {
	comboItem: ICombo | null
	loading: boolean
	error: string | null
	getComboItem: (slug: string) => Promise<void>
}

export const useComboItemStore = create<ComboItemState>(set => ({
	comboItem: null,
	loading: false,
	error: null,

	getComboItem: async (slug: string) => {
		set({ loading: true, error: null, comboItem: null })
		try {
			const response = await ComboService.comboItem(slug)
			const foundItem = response.data.find((item: ICombo) => item.slug === slug)
			if (foundItem) {
				set({ comboItem: foundItem, loading: false })
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
