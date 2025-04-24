import { useProductsModalStore } from '@/store/products-modal-store'
import { ICart } from '@/utils/types'

const SnackCard = (props: { items: ICart }) => {
	const { productsModalOpen } = useProductsModalStore()

	const { items } = props

	return (
		<div
			className='flex flex-col items-start justify-between text-left p-5 w-full h-auto bg-white shadow-[5px_2px_30px_hsla(257,8%,83%,0.3)] rounded-[14px] cursor-pointer duration-75 ease-in hover:scale-[1.02]'
			onClick={() => productsModalOpen(items.id)}
		>
			<div className='w-full flex flex-col items-start'>
				<div className='w-full relative mb-[5px] rounded-3xl overflow-hidden'>
					<img src={items.image} alt={`snack-img${items.id} `} />
				</div>
				<p className='font-normal text-[15px] leading-[19px] text-black mb-1.5 max-sm:text-[13px]'>
					{items.title}
				</p>
				<p className='font-normal text-[13px] leading-3.5 text-[#828282] mb-2.5 max-sm:text-[11px]'>
					{items.description}
				</p>
			</div>
			<div className='relative flex flex-row items-center justify-between w-max text-sm font-bold leading-[13px] bg-[#ebebeb] rounded-[100px] py-[7px] px-3.5 h-7 my-0 mr-auto ml-0 max-sm:py-1 max-sm:px-2 max-sm:h-4 max-sm:text-[11px]'>
				<p>{items.price?.toLocaleString()} so'm</p>
			</div>
		</div>
	)
}

export default SnackCard
