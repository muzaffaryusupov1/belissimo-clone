import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { ICart } from '@/utils/types'
import { Trash2Icon } from 'lucide-react'
import CartActions from './CartActions'

const CartItem = (props: { items: ICart[] }) => {
	const { removeFromCart, clearCart } = useCartStore()

	return (
		<div className='divide-y divide-gray-200 rounded-2xl shadow-[0px_3px_15px_hsla(0,0%,85%,.3)]'>
			{props.items.map(item => (
				<div
					className='flex flex-row items-center gap-[7px] justify-between py-[15px] px-[25px] relative max-md:px-2.5 max-sm:px-1'
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
							<h3 className='font-normal text-[15px] leading-[19px] max-sm:text-sm'>
								{item.title}
							</h3>
							{item.constructor?.length !== 0 ? (
								<p className='text-[13px] mt-[5px] text-[#828282] max-sm:text-xs'>
									+{' '}
									{item.constructor?.map(i => (
										<span key={i.id}>{`${i.title}, `}</span>
									))}
								</p>
							) : (
								<p></p>
							)}
						</div>
					</div>
					<div className='w-max flex flex-col items-end mr-5'>
						<CartActions quantity={item.quantity} id={item.id} />
						<p className='font-semibold text-[15px] leading-3.5 text-right text-black'>
							{(item.price * item.quantity).toLocaleString()} so'm
						</p>
					</div>
					<Button
						className='absolute top-0 right-0 border border-red-500 hover:bg-white hover:text-red-700'
						variant={'destructive'}
						size={'sm'}
						onClick={() => removeFromCart(item.id)}
					>
						<Trash2Icon />
					</Button>
				</div>
			))}
			<div className='flex justify-end mt-2.5'>
				<Button
					className='border border-red-500 hover:bg-white hover:text-red-700'
					variant={'destructive'}
					size={'sm'}
					onClick={() => clearCart()}
				>
					Savatchani tozalash
				</Button>
			</div>
		</div>
	)
}

export default CartItem
