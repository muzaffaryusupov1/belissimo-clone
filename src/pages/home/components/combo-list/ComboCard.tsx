import { Badge } from '@/components/ui/badge'
import { useComboStore } from '@/store/combo-store'
import { saleLine } from '@/utils/helpers'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const ComboCard = () => {
	const { combo, getCombos } = useComboStore()

	useEffect(() => {
		getCombos()
	}, [getCombos])

	const navigate = useNavigate()

	const navigateToCombo = (slug: string): void => {
		navigate(`/combo/${slug}`)
	}
	return (
		<>
			{combo.map(item => (
				<div
					className='p-[15px] my-[10px] rounded-2xl cursor-pointer bg-white shadow-[5px_2px_30px_hsla(257,8%,83%,0.3)] duration-300 ease-in flex flex-col justify-between hover:scale-[1.02]'
					onClick={() => navigateToCombo(item.slug)}
					key={item.id}
				>
					<div>
						<div className='rounded-[8px] overflow-hidden mb-[10px]'>
							<img src={item.image} alt={`banner-img${item.id}`} className='w-full h-full' />
						</div>
						<h3 className='text-[19px] mb-2'>{item.title}</h3>
						<p className='mb-[5px] text-sm'>{item.description}</p>
					</div>
					{item.showOldPrice && (
						<div className='flex flex-row items-center justify-start gap-3'>
							<div className='relative text-[#8d8d8d] font-normal'>
								<div className='absolute w-full'>
									<img src={saleLine} alt='stroke' className='w-full' />
								</div>
								<p>{item.oldPrice.toLocaleString()} so'm</p>
							</div>
							<Badge variant={'destructive'} className='rounded-[100px]'>
								{item.discount}%
							</Badge>
						</div>
					)}
					<p className='w-max rounded-[100px] text-[19px] font-bold'>
						{item.price.toLocaleString()} so'm
					</p>
				</div>
			))}
		</>
	)
}

export default ComboCard
