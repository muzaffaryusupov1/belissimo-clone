import { ICart } from '@/utils/types'
import CartActions from './CartActions'

const CartItem = (props: { items: ICart[] }) => {
	return (
		<div className='divide-y divide-gray-200 rounded-2xl shadow-[0px_3px_15px_hsla(0,0%,85%,.3)]'>
			{props.items.map(item => (
				<div
					className='flex flex-row items-center gap-[7px] justify-between py-[15px] px-[25px] '
					key={item.id}
				>
					<div className='flex flex-row items-center justify-start'>
						<div className='w-20 h-20 mr-2.5'>
							<img
								src={item.image}
								alt={`cart-item-img${item.id}`}
								className='w-full h-full object-contain'
							/>
						</div>
						<div>
							<h3 className='font-normal text-[15px] leading-[19px]'>{item.title}</h3>
						</div>
					</div>
					<div className='w-max flex flex-col items-end'>
						<CartActions quantity={item.quantity} id={item.id} />
						<p className='font-semibold text-[15px] leading-3.5 text-right text-black'>
							{(item.price * item.quantity).toLocaleString()} so'm
						</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default CartItem
