import { useProductsStore } from '@/store/products-store'
import { useEffect } from 'react'
import DessertCard from './DessertCard'

const DessertList = () => {
	const { products, getProducts } = useProductsStore()

	useEffect(() => {
		getProducts('dessert')
	}, [getProducts])

	const product = products['dessert'] || []

	return (
		<div id='dessert' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-[20px] leading-[17px] text-black my-5'>Desertlar</h2>
					<div className='grid grid-cols-4 gap-[15px] max-lg:grid-cols-2 max-[500px]:grid-cols-1 max-md:gap-2'>
						{product.map(items => (
							<DessertCard items={items} key={items.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default DessertList
