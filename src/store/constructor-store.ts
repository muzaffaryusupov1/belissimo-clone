import ConstructorService from '@/service/constructor'
import { IConstructor } from '@/utils/types'
import { create } from 'zustand'

interface ConstructorState {
	constructors: IConstructor[]
	loading: boolean
	error: string | null
	getConstructors: () => Promise<void>
}

export const useConstructorStore = create<ConstructorState>(set => ({
	constructors: [],
	loading: false,
	error: null,

	getConstructors: async () => {
		set({ loading: true, error: null })

		try {
			const response = await ConstructorService.constructor()
			set({ constructors: response.data, loading: false })
		} catch (error: unknown) {
			if (error instanceof Error) {
				set({ error: error.message, loading: false })
			} else {
				set({ error: 'Error', loading: false })
			}
		}
	},
}))
