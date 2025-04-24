import ProductsService from '@/service/products'
import { ICart } from '@/utils/types'
import { create } from 'zustand'

interface ProductsState {
	products: Record<string, ICart[]>
	loading: boolean
	error: string | null
	getProducts: (slug: string) => Promise<void>
}

export const useProductsStore = create<ProductsState>(set => ({
	products: {},
	loading: false,
	error: null,

	getProducts: async (slug: string) => {
		set({ loading: true, error: null })
		try {
			const response = await ProductsService.getProducts(slug)
			set(state => ({
				products: {
					...state.products,
					[slug]: response.data,
				},
				loading: false,
			}))
		} catch (error: unknown) {
			if (error instanceof Error) {
				set({ error: error.message, loading: false })
			} else {
				set({ error: 'Error', loading: false })
			}
		}
	},
}))
