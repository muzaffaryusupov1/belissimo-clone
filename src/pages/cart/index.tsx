import { useCartStore } from '@/store/cart-store'
import { CartEmpty, CartInfo, CartItem } from './components'

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
						<div>
							<h2 className='mt-[30px] mb-2.5 font-semibold text-[19px] leading-[19px] text-black'>
								Qo'shishni maslahat beramiz
							</h2>
							<div className='px-0.5 pt-2.5 pb-[13px] flex flex-row overflow-x-scroll'>
								<div className='py-[23px] px-[45px] bg-white shadow-[5px_2px_10px_hsla(0,0%,87%,.88)] max-w-[150px] min-w-[150px] rounded-[14px] mr-2.5 flex flex-col items-center justify-center gap-2 cursor-pointer'>
									<div className='w-[120px] h-[71px] rounded-[10px] mr-2.5 flex items-center justify-center'>
										<img
											src='/snack-list/snack-img1.webp'
											alt='recommendation image'
											className='w-full h-full object-contain'
										/>
									</div>
									<div>
										<p className='font-bold text-lg leading-3.5 text-[#1b1b1b] mb-1 text-center'>
											"Po-derevenski" kartoshkasi
										</p>
										<p className='font-normal text-[15px] leading-[17px] text-center text-[#8d8d8d]'>
											19 000 so'm
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<CartInfo />
				</div>
			)}
		</div>
	)
}

export default CartPage
