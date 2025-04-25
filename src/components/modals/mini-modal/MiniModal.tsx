import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useCartStore } from '@/store/cart-store'
import { useProductsItemStore } from '@/store/products-item-store'
import { useProductsModalStore } from '@/store/products-modal-store'
import { toaster } from '@/utils/helpers'
import { ICart } from '@/utils/types'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'

const MiniModal = () => {
	const { activeId, productsModal, productsModalClose } = useProductsModalStore()
	const { productsItem, getProductsItem } = useProductsItemStore()
	const { addToCart } = useCartStore()

	useEffect(() => {
		if (activeId !== null) {
			getProductsItem(activeId)
		}
	}, [activeId, getProductsItem])

	const addCart = (item: ICart) => {
		addToCart({ ...item, constructor: [] })
		toaster(item.title, "savatga qo'shildi")
		productsModalClose()
	}

	return (
		<Dialog open={productsModal} onOpenChange={productsModalClose}>
			<DialogContent className='sm:max-w-[900px] [&>button]:hidden rounded-4xl bg-white overflow-hidden shadow-[0px_3px_15px_hsla(0,0%,85%,0.3)] max-sm:overflow-auto max-sm:p-2'>
				<div className='gridTemplate items-center gap-[25px] max-w-[900px] w-full p-8 max-h-[calc(100dvh-20px)] max-md:flex max-md:flex-col max-md:p-4 max-sm:p-2'>
					<Button
						className='absolute top-[15px] left-[15px] border-0 text-[calc(27px-2px)] p-4 text-[#ff002b] rounded-[50%] flex items-center justify-center z-10 duration-75 ease-in bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] hover:bg-neutral-100'
						size={'lg'}
						onClick={productsModalClose}
					>
						<ArrowLeft />
					</Button>
					<div className='w-[400px] h-full flex items-center max-md:w-[300px] max-sm:w-full max-sm:h-[200px]'>
						<img
							src={productsItem?.image}
							alt={`item-img${productsItem?.id}`}
							className='w-full h-full object-cover max-sm:object-contain'
						/>
					</div>
					<div className='relative max-h-[650px] h-max overflow-y-auto max-md:w-max max-sm:w-full max-sm:max-h-full'>
						<div className='mb-4 pb-4 max-sm:pb-0 max-sm:mb-0'>
							<DialogTitle className='text-[27px] mb-[5px] font-bold max-sm:text-xl'>
								{productsItem?.title}
							</DialogTitle>
							{productsItem?.description ? (
								<p className='mb-[15px] leading-[18px] text-[#828282] max-sm:mb-2 max-sm:text-sm'>
									{productsItem.description}
								</p>
							) : null}
							<DialogDescription className='text-[19px] text-black'>
								{productsItem?.price.toLocaleString()} so'm
							</DialogDescription>
						</div>
						<div></div>
						<div className='bottom-0 bg-white pt-[18px] z-10 max-sm:pt-0'>
							<Button
								className='bg-[#006f4c] text-white border-none rounded-[60px] text-center font-bold text-base py-[15px] px-[25px] my-[1em] mx-[25px] w-[calc(100%-50px)] max-w-[400px] duration-200 ease-in-out hover:bg-[#009163]'
								onClick={() => addCart(productsItem!)}
							>
								Savatga qo'shish
							</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default MiniModal
