import { PlusIcon } from 'lucide-react'

const PitsaModalCard = () => {
	return (
		<div className='bg-white box-border shadow-[0px_2px_12px_rgba(0,0,0,.08)] border-2 border-solid border-transparent rounded-2xl w-full h-[124px] py-5 px-2.5 text-center relative duration-300 ease-in-out flex flex-col items-center'>
			<div className='w-[25px] h-[25px] rounded-[50%] absolute top-2 left-2 bg-[#f2f2f2] duration-75 ease-in z-10'>
				<span>
					<PlusIcon />
				</span>
			</div>
			<div className='w-10 pb-2.5 relative mx-auto mb-2.5'>
				<img
					src='/pitsa-list/modal-pitsa/modal-img1.webp'
					alt='img'
					className='rounded-lg overflow-hidden'
				/>
			</div>
			<div className='flex flex-col items-center justify-between h-full'>
				<p className='text-[13px] leading-3.5 font-normal mb-[5px]'>Kornishon</p>
				<p className='text-[11px] font-bold leading-3'>2 000 so'm</p>
			</div>
		</div>
	)
}

export default PitsaModalCard
