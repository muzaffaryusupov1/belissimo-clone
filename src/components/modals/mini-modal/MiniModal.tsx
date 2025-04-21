import { ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { useModalStore } from '@/store/modal-store'

const MiniModal = () => {
	const { isOpen, close } = useModalStore()

	return (
		<Dialog open={isOpen} onOpenChange={close}>
			<DialogContent className='sm:max-w-[900px] [&>button]:hidden rounded-4xl bg-white overflow-hidden shadow-[0px_3px_15px_hsla(0,0%,85%,0.3)]'>
				<div className='gridTemplate items-center gap-[25px] max-w-[900px] w-full p-8 max-h-[calc(100dvh-20px)]'>
					<Button
						className='absolute top-[15px] left-[15px] border-0 text-[calc(27px-2px)] p-4 text-[#ff002b] rounded-[50%] flex items-center justify-center z-10 duration-75 ease-in bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] hover:bg-neutral-100 h-11'
						size={'lg'}
						onClick={close}
					>
						<ArrowLeft />
					</Button>
					<div className='w-[400px] h-full flex items-center'>
						<img
							src='/snack-list/snack-img1.webp'
							alt='modal image'
							sizes='100vw'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='relative max-h-[650px] h-max overflow-y-auto'>
						<div className='mb-4 pb-4'>
							<h2 className='text-[27px] mb-[5px] font-bold'>Kartoshka fri</h2>
							<p className='mb-[15px] leading-[18px] text-[#828282]'>
								Pechdan yangi uzilgan qarsildoq kartoshka fri
							</p>
							<p className='text-[19px] text-black'>19 000 so'm</p>
						</div>
						<div></div>
						<div className='bottom-0 bg-white pt-[18px] z-10'>
							<Button className='bg-[#006f4c] text-white border-none rounded-[60px] text-center font-bold text-base py-[15px] px-[25px] my-[1em] mx-[25px] w-[calc(100%-50px)] max-w-[400px] duration-200 ease-in-out hover:bg-[#009163]'>
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
