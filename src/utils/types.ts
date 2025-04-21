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
}
