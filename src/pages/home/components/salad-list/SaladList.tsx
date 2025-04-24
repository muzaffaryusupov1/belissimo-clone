import { useProductsStore } from '@/store/products-store'
import { useEffect } from 'react'
import SaladCard from './SaladCard'

const SaladList = () => {
	const { products, getProducts } = useProductsStore()

	useEffect(() => {
		getProducts('salad')
	}, [getProducts])

	const product = products['salad'] || []
	return (
		<div id='salad' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-[20px] leading-[17px] text-black my-5'>Salatlar</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						{product.map(item => (
							<SaladCard items={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SaladList
