import { useCartStore } from '@/store/cart-store'
import { CartEmpty, CartInfo, CartItem, CartRecommended } from './components'

const CartPage = () => {
	const { items } = useCartStore()

	return (
		<div className='container'>
			{items.length === 0 ? (
				<CartEmpty />
			) : (
				<div className='grid grid-cols-[65%_35%] py-10 px-[25px] gap-[22px]'>
					<div>
						<CartItem items={items} />
						<CartRecommended />
					</div>
					<CartInfo />
				</div>
			)}
		</div>
	)
}

export default CartPage
