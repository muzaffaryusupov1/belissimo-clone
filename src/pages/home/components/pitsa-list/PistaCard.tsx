import { usePitsaModalStore } from '@/store/pitsa-modal'
import { usePitsaStore } from '@/store/pitsa-store'
import { useEffect } from 'react'
import PitsaModal from './pitsa-modal/PitsaModal'

const PistaCard = () => {
	const { pitsaModalOpen, activeId, pitsaModal } = usePitsaModalStore()
	const { getPitsaList, pitsa } = usePitsaStore()

	useEffect(() => {
		getPitsaList()
	}, [getPitsaList])

	return (
		<>
			{pitsa.map(item => (
				<div
					className='flex flex-col items-center justify-start p-5 bg-white shadow-[5px_2px_30px_hsla(257,8%,83%,0.3)] rounded-[14px] w-full mb-2 cursor-pointer duration-75 ease-in hover:scale-[1.02] max-lg:flex-row max-lg:w-full max-lg:h-full'
					onClick={() => pitsaModalOpen(item.id)}
					key={item.id}
				>
					<div className='min-w-[105px] w-full h-full relative rounded-[14px] overflow-hidden max-lg:w-[105px] max-lg:h-[100px]'>
						<img
							src={item.image}
							alt={`pitsa-img${item.id}`}
							className='object-cover w-full h-full'
						/>
					</div>
					<div className='ml-[15px] flex flex-col justify-between items-start gap-11 w-full h-full pt-[10px] max-lg:gap-0 max-lg:pt-2.5'>
						<div>
							<h3 className='font-normal text-lg leading-[17px] text-black mb-[5px]'>
								{item.title}
							</h3>
							<p className='font-normal text-[13px] leading-3.5 text-[#828282] max-lg:text-[11px]'>
								{item.description}
							</p>
						</div>
						<div className='bg-[#ebebeb] rounded-[27px] py-2 px-3 w-max mt-2.5'>
							<p className='not-italic font-bold text-sm leading-3.5 text-black max-lg:text-[13px]'>
								{item.price?.toLocaleString()} so'mdan
							</p>
						</div>
					</div>
				</div>
			))}
			{pitsaModal && activeId !== null && <PitsaModal />}
		</>
	)
}

export default PistaCard
