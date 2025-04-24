import ProductsService from '@/service/products'
import { ICart } from '@/utils/types'
import { create } from 'zustand'

interface ProductsItemState {
	productsItem: ICart | null
	loading: boolean
	error: string | null
	getProductsItem: (id: number) => Promise<void>
}

export const useProductsItemStore = create<ProductsItemState>(set => ({
	productsItem: null,
	loading: false,
	error: null,

	getProductsItem: async (id: number) => {
		set({ loading: true, error: null, productsItem: null })
		try {
			const response = await ProductsService.getProductsItem(id)
			const foundItem = response.data.find((item: ICart) => item.id === id)
			if (foundItem) {
				set({ productsItem: foundItem, loading: false })
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
