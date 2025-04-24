import { IConstructor } from '@/utils/types'

const ConstructorCardItem = (props: {
	items: IConstructor[]
	cards: IConstructor[]
	handleClick: (id: IConstructor) => void
}) => {
	const { items, cards, handleClick } = props

	return (
		<>
			{items.map(item => (
				<div
					className={`cursor-pointer h-auto p-5 bg-white box-border shadow-[0_2px_12px_rgba(0,0,0,.08)] border-2 border-solid rounded-2xl w-full text-center relative duration-100 ease-in flex flex-col items-center hover:scale-[1.02] ${
						cards.includes(item) ? 'border-[rgba(0,111,76,.72)]' : 'border-transparent'
					}`}
					onClick={() => handleClick(item)}
					key={item.id}
				>
					<div
						className={`w-[25px] h-[25px] rounded-[50%] absolute top-2 left-2  duration-100 ease-in z-10 ${
							cards.includes(item) ? 'bg-[#006f4c]' : 'bg-[#f2f2f2]'
						}`}
					>
						<span
							className={`duration-300 ease-in block absolute top-3 left-1.5 w-3 h-0.5 rounded-[2px] ${
								cards.includes(item) ? 'rotate-45 bg-white' : 'rotate-90 bg-black'
							}`}
						></span>
						<span
							className={`duration-300 ease-in block absolute top-3 left-1.5 w-3 h-0.5 rounded-[2px] ${
								cards.includes(item) ? '-rotate-45 bg-white' : 'rotate-0 bg-black'
							}`}
						></span>
					</div>
					<div className='w-[60px] mx-auto mb-2.5'>
						<img src={item.image} alt={`constructor-img${item.id}`} />
					</div>
					<div className='flex flex-col items-center justify-between h-full'>
						<p className='text-sm leading-[15px] font-normal mb-[5px]'>{item.title}</p>
						<p className='text-[13px] font-bold leading-3'>{item.price?.toLocaleString()} so'm</p>
					</div>
				</div>
			))}
		</>
	)
}

export default ConstructorCardItem
