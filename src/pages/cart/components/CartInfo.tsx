import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'

const CartInfo = () => {
	const { items } = useCartStore()
	const subtotal = items.reduce((a, b) => a + b.price * b.quantity, 0)

	return (
		<div>
			<div className='rounded-2xl py-5 px-[25px] bg-white shadow-[0_3px_15px_hsla(0,0%,85%,.3)] flex flex-col items-center gap-[22px]'>
				<p className='text-center text-[#ff002b] text-base'>
					Kuponni kiritish va bellkoinlarni ishlatish uchun tizimga kiring
				</p>
				<Button className='w-full bg-[#262a2c] border-none rounded-[60px] text-center text-white font-bold text-base py-[15px] px-[25px] my-[1em] mx-[25px] max-w-[400px] duration-200 ease-in-out hover:bg-[#3e4345]'>
					Kirish
				</Button>
			</div>
			<div className='shadow-[0px_3px_15px_hsla(0,0%,85,0.3)] pb-[5px] rounded-2xl sticky top-[15px] my-[25px]'>
				<div className='mt-[25px] py-[15px] px-[25px]'>
					<div className='flex flex-row items-center justify-between mb-[15px]'>
						<p className='font-normal text-[15px] leading-[17px] text-right text-black'>
							Yetkazib berish
						</p>
						<p className='font-normal text-[15px] leading-[17px] text-right text-black'>Bepul</p>
					</div>
					<div className='flex flex-row items-center justify-between'>
						<p className='font-semibold text-xl leading-[23px] text-black'>Umumiy narx</p>
						<p className='font-semibold text-xl leading-[23px] text-black text-right'>
							{subtotal.toLocaleString()} so'm
						</p>
					</div>
				</div>
				<div className='relative shadow-none bg-white left-0 right-0 bottom-0 flex flex-col py-[15px] px-[25px] items-center justify-center text-center'>
					<Button className='w-full m-0 bg-[#006f4c] text-white border-none rounded-[60px] text-center font-bold text-base duration-200 ease-in-out hover:bg-[#009163]'>
						Keyingisi
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CartInfo
