import { create } from 'zustand'

interface IProductsModalState {
	productsModal: boolean
	activeId: number | null
	productsModalOpen: (id: number) => void
	productsModalClose: () => void
}
export const useProductsModalStore = create<IProductsModalState>(set => ({
	productsModal: false,
	activeId: null,

	productsModalOpen: (id: number) => set({ productsModal: true, activeId: id }),
	productsModalClose: () => set({ productsModal: false, activeId: null }),
}))
