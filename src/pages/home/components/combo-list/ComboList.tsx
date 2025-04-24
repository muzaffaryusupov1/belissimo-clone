import ComboCard from './ComboCard'

const ComboList = () => {
	return (
		<div id='combo' className='scroll-mt-24'>
			<div className='container'>
				<div className='my-[25px]'>
					<h2 className='text-black text-xl font-bold'>Kombo</h2>
					<div className='grid grid-cols-4 gap-[15px] max-[990px]:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
						<ComboCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ComboList
