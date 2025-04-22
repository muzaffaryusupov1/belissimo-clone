import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { usePitsaItemStore } from '@/store/pitsa-item-store'
import { usePitsaModalStore } from '@/store/pitsa-modal'
import { useEffect } from 'react'
import PitsaModalCard from './PitsaModalCard'
import PitsaModalTabs from './PitsaModalTabs'

const PitsaModal = () => {
	const { pitsaModal, pitsaModalClose, activeId } = usePitsaModalStore()
	const { getPitsaItem, pitsaItem } = usePitsaItemStore()

	useEffect(() => {
		if (activeId !== null) {
			getPitsaItem(activeId)
		}
	}, [getPitsaItem, activeId])

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
							<div className='flex items-start mb-[15px] leading-[18px] text-[#828282]'>
								<h4 className='text-[#323232] font-semibold mr-1.5'>Tanlangan bort:</h4>
								<p>Oddiy bort</p>
							</div>
							<div className='flex items-start mb-[15px] leading-[18px] text-[#828282]'>
								<h4 className='text-[#323232] font-semibold mr-1.5'>Masalliqlar:</h4>
								<p>Tanlanmagan</p>
							</div>
						</div>
						<div className='flex flex-row items-center justify-between'>
							<p className='text-2xl text-[#262a2c] font-semibold'>
								{pitsaItem?.price?.toLocaleString()} so'm
							</p>
							<div></div>
						</div>
					</div>
				</div>
				<div className='h-full w-full min-h-[470px] overflow-x-hidden my-scroll'>
					<div className='max-h-[475px]'>
						<DialogHeader className='mb-4 text-lg font-bold'>Pitsa kattaligi</DialogHeader>

						<PitsaModalTabs />

						<div className='w-full bg-white mt-5'>
							<div className='flex flex-row items-center justify-between'>
								<h3 className='text-lg font-bold text-black'>Masalliqlarni tanlang</h3>
								<Badge className='bg-[#ffc600] rounded-[100px] py-2 px-[15px] font-semibold text-sm text-black'>
									0 / 15
								</Badge>
							</div>
							<div className='h-max my-grid gap-2.5 max-w-full py-3 px-0.5 pb-24'>
								<PitsaModalCard />
								<PitsaModalCard />
								<PitsaModalCard />
								<PitsaModalCard />
								<PitsaModalCard />
								<PitsaModalCard />
								<PitsaModalCard />
							</div>
						</div>
					</div>
					<div className='fixed bottom-5 right-0 w-[50%] z-20 px-6 bg-white'>
						<div className='sticky p-0 z-[111111] flex flex-col items-start left-0 right-0 bottom-0 rounded-bl-[20px] rounded-br-[20px]'>
							<div className='w-full'>
								<Button className='mt-5 w-full mt-20px max-w-none bg-[#006f4c] text-white border-none rounded-[60px] text-center font-bold text-base p-[25px] cursor-pointer flex duration-200 ease-in-out hover:bg-[#009163]'>
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
