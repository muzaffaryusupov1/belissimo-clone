import PistaCard from './PistaCard'

const PitsaList = () => {
	return (
		<div id='pitsa' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-xl leading-[17px] text-black mb-[15px] mt-5'>Pitsa</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						<PistaCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default PitsaList
