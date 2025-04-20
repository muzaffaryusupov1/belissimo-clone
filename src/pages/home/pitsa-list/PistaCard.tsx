import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import PitsaModal from './pitsa-modal/PitsaModal'

const PistaCard = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className='flex flex-col items-center justify-start p-5 bg-white shadow-[5px_2px_30px_hsla(257,8%,83%,0.3)] rounded-[14px] w-full mb-2 cursor-pointer duration-75 ease-in hover:scale-[1.02]'>
					<div className='min-w-[105px] w-full h-full relative rounded-[14px] overflow-hidden'>
						<img src='/pitsa-list/pitsa-img1.webp' alt='pitsa img' className='object-cover' />
					</div>
					<div className='ml-[15px] flex flex-col justify-between items-start gap-11 w-full h-full pt-[10px]'>
						<div>
							<h3 className='font-normal text-lg leading-[17px] text-black mb-[5px]'>
								4 pishloqli
							</h3>
							<p className='font-normal text-[13px] leading-3.5 text-[#828282]'>
								Motsarella, cheddar, parmezan va mayin mini motsarella – choʻziladi, eriydi, ilk
								luqmadayoq rom etadi.
							</p>
						</div>
						<div className='bg-[#ebebeb] rounded-[27px] py-2 px-3 w-max mt-2.5'>
							<p className='not-italic font-bold text-sm leading-3.5 text-black'>69 000 so'mdan</p>
						</div>
					</div>
				</div>
			</DialogTrigger>
			<PitsaModal />
		</Dialog>
	)
}

export default PistaCard
