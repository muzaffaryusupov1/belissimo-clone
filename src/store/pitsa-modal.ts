import { IPitsaModalState } from '@/utils/types'
import { create } from 'zustand'

export const usePitsaModalStore = create<IPitsaModalState>(set => ({
	pitsaModal: false,
	activeId: null,

	pitsaModalOpen: (id: number) => set({ pitsaModal: true, activeId: id }),
	pitsaModalClose: () => set({ pitsaModal: false, activeId: null }),
}))
