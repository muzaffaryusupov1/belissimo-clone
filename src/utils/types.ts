export interface INav {
	id: number
	title: string
	navigate: string
}

export interface IModalState {
	isOpen: boolean
	open: () => void
	close: () => void
}

export interface IPitsaModalState {
	pitsaModal: boolean
	activeId: number | null
	pitsaModalOpen: (id: number) => void
	pitsaModalClose: () => void
}

export interface IBanner {
	id: number
	image: string
}

export interface ICombo {
	id: number
	title: string
	description: string
	price: number
	oldPrice: number
	showOldPrice: boolean
	discount: number
	slug: string
	image: string
	constructor: IConstructor[] | null
}

export interface ICart extends ICombo {
	quantity: number
}

export interface ICartState {
	items: ICart[]
	addToCart: (item: ICart) => void
	removeFromCart: (id: number) => void
	increaseQty: (id: number) => void
	decreaseQty: (id: number) => void
	clearCart: () => void
}

export type TypeNavigation = {
	id: number
	title: string
	navigate: string
}

export interface IPitsa {
	id: number
	title: string
	description: string
	price: number
	image: string
}

export interface IConstructor {
	id: number
	title: string
	price: number
	image: string
}

export interface IConstructorObj extends ICart {
	constructors: IConstructor[]
}
