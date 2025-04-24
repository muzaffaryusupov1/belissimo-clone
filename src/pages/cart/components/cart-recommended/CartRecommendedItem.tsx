import { useCartStore } from '@/store/cart-store'
import { useProductsStore } from '@/store/products-store'
import { useEffect } from 'react'

const CartRecommendedItem = () => {
	const { getAllProducts, allProducts } = useProductsStore()
	const { addToCart } = useCartStore()

	useEffect(() => {
		getAllProducts()
	}, [getAllProducts])

	return (
		<>
			{allProducts.map(item => (
				<div
					className='py-[23px] px-[45px] bg-white shadow-[5px_2px_10px_hsla(0,0%,87%,.88)] max-w-[150px] min-w-[150px] rounded-[14px] mr-2.5 flex flex-col items-center justify-center gap-2 cursor-pointer'
					key={item.id}
					onClick={() => addToCart({ ...item, constructor: [] })}
				>
					<div className='w-[120px] h-[71px] rounded-[10px] mr-2.5 flex items-center justify-center'>
						<img
							src={item.image}
							alt={`recommendation-img${item.id}`}
							className='w-full h-full object-contain'
						/>
					</div>
					<div>
						<p className='font-bold text-base leading-3.5 text-[#1b1b1b] mb-1 text-center'>
							{item.title}
						</p>
						<p className='font-normal text-[15px] leading-[17px] text-center text-[#8d8d8d]'>
							{item.price.toLocaleString()} so'm
						</p>
					</div>
				</div>
			))}
		</>
	)
}

export default CartRecommendedItem
