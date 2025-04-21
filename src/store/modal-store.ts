import { IModalState } from '@/utils/types'
import { create } from 'zustand'

export const useModalStore = create<IModalState>(set => ({
	isOpen: false,
	open: () => set({ isOpen: true }),
	close: () => set({ isOpen: false }),
}))
