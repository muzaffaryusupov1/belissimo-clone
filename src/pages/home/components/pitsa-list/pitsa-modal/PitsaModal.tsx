import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import ConstructorCardItem from '@/pages/constructor/components/ConstructorCardItem'
import { useCartStore } from '@/store/cart-store'
import { useConstructorStore } from '@/store/constructor-store'
import { usePitsaItemStore } from '@/store/pitsa-item-store'
import { usePitsaModalStore } from '@/store/pitsa-modal'
import { toaster } from '@/utils/helpers'
import { ICart, IConstructor } from '@/utils/types'
import { ArchiveX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

const PitsaModal = () => {
	const { pitsaModal, pitsaModalClose, activeId } = usePitsaModalStore()
	const { getPitsaItem, pitsaItem } = usePitsaItemStore()
	const { addToCart } = useCartStore()
	const { constructors, getConstructors } = useConstructorStore()
	const [cards, setCards] = useState<IConstructor[]>([])
	const subtotal = cards.reduce((a, b) => a! + b.price, pitsaItem?.price)

	useEffect(() => {
		if (activeId !== null) {
			getPitsaItem(activeId)
		}
		getConstructors()
	}, [getPitsaItem, activeId, getConstructors])

	const addCart = (item: ICart) => {
		addToCart({ ...item, constructor: [...cards], price: subtotal as number })
		toaster(item.title, "savatga qo'shildi")
		pitsaModalClose()
	}

	const handleClick = (id: IConstructor) => {
		if (cards.length >= 10) {
			setCards(prev => prev.filter(i => i !== id))
			toast("Faqat 10 ta masalliq qo'sha olasiz", {
				icon: <ArchiveX />,
				position: 'top-right',
				richColors: true,
			})
		} else {
			setCards(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]))
		}
	}

	if (!activeId) return

	return (
		<Dialog open={pitsaModal} onOpenChange={pitsaModalClose}>
			<DialogContent className='w-full sm:max-w-[900px] h-[600px] bg-white rounded-4xl overflow-hidden p-[25px] shadow-[0px_3px_15px_hsla(0,0%,85%,0.3)] grid items-stretch grid-cols-[400px_1fr] gap-[25px]'>
				<div className='flex flex-col items-center justify-between min-h-[500px] h-full max-w-[400px] w-full'>
					<div className='flex items-center w-[243px] h-[238px] mb-[16px] rounded-[64px] overflow-hidden'>
						<img
							src={pitsaItem?.image}
							alt={`pitsa-img${pitsaItem?.id}`}
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='sticky top-0 z-50 bg-white pt-[15px]'>
						<DialogTitle className='text-2xl mb-2.5 font-bold'>{pitsaItem?.title}</DialogTitle>
						<DialogDescription className='mb-[15px] leading-[18px] text-[#828282]'>
							{pitsaItem?.description}
						</DialogDescription>
						<hr className='h-3' />
						<div className='h-[100px]'>
							<div className='flex items-start flex-wrap mb-[15px] leading-[18px] text-[#828282]'>
								<h4 className='text-[#323232] font-semibold mr-1.5'>Tanlangan bort:</h4>
								<p>Mavjud emas</p>
							</div>
							<div>
								<div className='flex items-start flex-wrap mb-[15px] leading-[18px] text-[#828282]'>
									<h4 className='text-[#323232] font-semibold mr-1.5'>Masalliqlar:</h4>
									{cards.length !== 0 ? (
										cards.map(i => <p key={i.id}>{`${i.title}, `}</p>)
									) : (
										<p>Tanlanmagan</p>
									)}
								</div>
							</div>
						</div>
						<div className='flex flex-row items-center justify-between'>
							<p className='text-2xl text-[#262a2c] font-semibold'>
								{subtotal?.toLocaleString()} so'm
							</p>
							<div></div>
						</div>
					</div>
				</div>
				<div className='h-full w-full min-h-[470px] overflow-x-hidden my-scroll'>
					<div className='max-h-[475px]'>
						<h1 className='mb-4 text-lg font-normal'>
							Pitsa kattaligi:
							<span className='font-bold'> Kickkina</span>
						</h1>

						<div className='w-full bg-white'>
							<div className='flex flex-row items-center justify-between'>
								<DialogHeader className='text-lg font-bold text-black'>
									Masalliqlarni tanlang
								</DialogHeader>
								<Badge className='bg-[#ffc600] rounded-[100px] py-2 px-[15px] font-semibold text-sm text-black'>
									{cards.length} / 10
								</Badge>
							</div>
							<div className='h-max my-grid gap-2.5 max-w-full py-3 px-0.5 pb-24'>
								<ConstructorCardItem handleClick={handleClick} cards={cards} items={constructors} />
							</div>
						</div>
					</div>
					<div className='fixed bottom-5 right-0 w-[50%] z-20 px-6 bg-white'>
						<div className='sticky p-0 z-[111111] flex flex-col items-start left-0 right-0 bottom-0 rounded-bl-[20px] rounded-br-[20px]'>
							<div className='w-full'>
								<Button
									className='mt-5 w-full mt-20px max-w-none bg-[#006f4c] text-white border-none rounded-[60px] text-center font-bold text-base p-[25px] cursor-pointer  duration-200 ease-in-out hover:bg-[#009163]'
									onClick={() => addCart(pitsaItem!)}
								>
									Savatga qo'shish
								</Button>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default PitsaModal
