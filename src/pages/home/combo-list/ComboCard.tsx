import { Badge } from '@/components/ui/badge'
import { saleLine } from '@/utils/helpers'

const ComboCard = () => {
	return (
		<div className='p-[15px] my-[10px] rounded-2xl cursor-pointer bg-white shadow-[5px_2px_30px_hsla(257,8%,83%,0.3)] duration-300 ease-in flex flex-col justify-between hover:scale-[1.02]'>
			<div>
				<div className='rounded-[8px] overflow-hidden mb-[10px]'>
					<img src='/combo-list/cobo-img1.webp' alt='combo image' className='w-full h-full' />
				</div>
				<h3 className='text-[19px] mb-2'>Ishta-Ha! boksi</h3>
				<p className='mb-[5px] text-sm'>
					Pepperoni pitsasi (20 cm), qarsildoq kartoshka fri va ishtahaochar stripslar (3 ta) –
					shunchalar mazaliki, beixtiyor yana deb yuborasiz!
				</p>
			</div>
			<div className='flex flex-row items-center justify-start gap-3'>
				<div className='relative text-[#8d8d8d] font-normal'>
					<div className='absolute w-full'>
						<img src={saleLine} alt='stroke' className='w-full' />
					</div>
					<p>173 000 so'm</p>
				</div>
				<Badge variant={'destructive'} className='rounded-[100px]'>
					20%
				</Badge>
			</div>
			<p className='w-max rounded-[100px] text-[19px] font-bold'>49 000 so'm</p>
		</div>
	)
}

export default ComboCard
