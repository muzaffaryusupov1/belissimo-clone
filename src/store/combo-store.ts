import ComboService from '@/service/combo'
import { ICombo } from '@/utils/types'
import { create } from 'zustand'

interface ComboState {
	combo: ICombo[]
	comboItem: ICombo[]
	loading: boolean
	error: string | null
	getCombos: () => Promise<void>
	getComboItem: (slug: string) => Promise<void>
}

export const useComboStore = create<ComboState>(set => ({
	combo: [],
	comboItem: [],
	loading: false,
	error: null,

	getCombos: async () => {
		set({ loading: true, error: null })
		try {
			const response = await ComboService.combo()
			set({ combo: response.data, loading: false })
		} catch (error: unknown) {
			console.log(error)
			if (error instanceof Error) {
				set({ error: error.message, loading: false })
			} else {
				set({ error: 'Error', loading: false })
			}
		}
	},
	getComboItem: async (slug: string) => {
		set({ loading: true, error: null })
		try {
			const response = await ComboService.comboItem(slug)
			set({ comboItem: response.data, loading: false })
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
