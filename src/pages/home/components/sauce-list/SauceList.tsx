import { useProductsStore } from '@/store/products-store'
import { useEffect } from 'react'
import SauceCard from './SauceCard'

const SauceList = () => {
	const { products, getProducts } = useProductsStore()

	useEffect(() => {
		getProducts('sauce')
	}, [getProducts])

	const product = products['sauce'] || []

	return (
		<div id='sauce' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-[20px] leading-[17px] text-black my-5'>Souslar</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						{product.map(item => (
							<SauceCard items={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SauceList
