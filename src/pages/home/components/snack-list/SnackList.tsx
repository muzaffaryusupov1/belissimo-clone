import { useProductsStore } from '@/store/products-store'
import { useEffect } from 'react'
import SnackCard from './SnackCard'

const SnackList = () => {
	const { products, getProducts } = useProductsStore()

	useEffect(() => {
		getProducts('snack')
	}, [getProducts])

	const product = products['snack'] || []

	return (
		<div id='snack' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-xl leading-[17px] text-black mb-[15px] mt-5'>Gazaklar</h2>
					<div className='grid grid-cols-4 gap-[15px] max-lg:grid-cols-2 max-md:gap-2'>
						{product.map(item => (
							<SnackCard items={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default SnackList
