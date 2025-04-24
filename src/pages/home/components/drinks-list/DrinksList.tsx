import { useProductsStore } from '@/store/products-store'
import { useEffect } from 'react'
import DrinksCard from './DrinksCard'

const DrinksList = () => {
	const { products, getProducts } = useProductsStore()

	useEffect(() => {
		getProducts('drinks')
	}, [getProducts])

	const product = products['drinks'] || []

	return (
		<div id='drinks' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-[20px] leading-[17px] text-black my-5'>Ichimliklar</h2>
					<div className='grid grid-cols-4 gap-[15px] max-lg:grid-cols-2 max-[500px]:grid-cols-1 max-md:gap-2'>
						{product.map(items => (
							<DrinksCard items={items} key={items.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DrinksList
