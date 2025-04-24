import { IConstructor } from '@/utils/types'
import ConstructorCardItem from './ConstructorCardItem'

const ConstructorModifier = (props: {
	items: IConstructor[]
	handleClick: (id: IConstructor) => void
	cards: IConstructor[]
}) => {
	const { items, cards, handleClick } = props

	return (
		<div>
			<div className='flex items-center justify-between'>
				<div className='ml-[25px] text-base poppins font-normal'>Masalliqlarni tanlang</div>
				<div className='bg-[#ffc600] rounded-[100px] py-2 px-[15px] font-semibold text-sm text-black'>
					{cards.length} / 10
				</div>
			</div>
			<div className='grid grid-cols-4 gap-[15px] py-2.5 px-[25px] mb-[170px]'>
				<ConstructorCardItem items={items} cards={cards} handleClick={handleClick} />
			</div>
		</div>
	)
}

export default ConstructorModifier
