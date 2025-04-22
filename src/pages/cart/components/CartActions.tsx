import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { MinusIcon, PlusIcon } from 'lucide-react'

const CartActions = (props: { id: number; quantity: number }) => {
	const { increaseQty, decreaseQty } = useCartStore()
	return (
		<div className='flex flex-row items-center justify-between gap-1.5 rounded-[10px] bg-[#efefef] w-max mb-2 ml-2'>
			<Button
				className='w-9 h-9 flex items-center justify-center bg-[#efefef] text-black'
				variant={'secondary'}
				onClick={() => decreaseQty(props.id)}
			>
				<MinusIcon />
			</Button>
			<p className='font-semibold text-[15px] leading-[15px] text-center text-black w-[15px]'>
				{props.quantity}
			</p>
			<Button
				className='w-9 h-9 flex items-center justify-center bg-[#efefef] text-black'
				variant={'secondary'}
				onClick={() => increaseQty(props.id)}
			>
				<PlusIcon />
			</Button>
		</div>
	)
}

export default CartActions
