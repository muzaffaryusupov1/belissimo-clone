import { ICart, ICartState } from '@/utils/types'
import { create } from 'zustand'

const getInitialCartItems = (): ICart[] => {
	if (typeof localStorage !== 'undefined') {
		const stored = localStorage.getItem('cart')
		return stored ? (JSON.parse(stored) as ICart[]) : []
	}
	return []
}

export const useCartStore = create<ICartState>((set, get) => ({
	items: getInitialCartItems(),

	addToCart: (payload: ICart) => {
		const isContain = get().items.some(item => item.id === payload.id)

		if (isContain) {
			set({
				items: get().items.map(i => (i.id === payload.id ? { ...i, quantity: i.quantity + 1 } : i)),
			})
			localStorage.setItem('cart', JSON.stringify(get().items))
		} else {
			set({
				items: [...get().items, { ...payload, quantity: 1 }],
			})

			localStorage.setItem('cart', JSON.stringify(get().items))
		}
	},
	removeFromCart: id => {
		const newItems = get().items.filter(item => item.id !== id)
		set({ items: newItems })
		localStorage.removeItem('cart')
	},
	increaseQty: payload => {
		const newItems = get().items.map(item =>
			item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
		)
		set({ items: newItems })
		localStorage.setItem('cart', JSON.stringify(get().items))
	},
	decreaseQty: payload => {
		const newItems = get()
			.items.map(item =>
				item.id === payload
					? { ...item, quantity: item.quantity === 1 ? 0 : item.quantity - 1 }
					: item
			)
			.filter(item => item.quantity > 0)

		set({ items: newItems })
		localStorage.setItem('cart', JSON.stringify(get().items))
	},
	clearCart: () => {
		set({ items: [] })
		localStorage.removeItem('cart')
	},
}))
