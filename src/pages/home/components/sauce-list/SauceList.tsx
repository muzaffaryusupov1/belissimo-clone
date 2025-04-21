import SauceCard from './SauceCard'

const SauceList = () => {
	return (
		<div id='sauce' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-[20px] leading-[17px] text-black my-5'>Souslar</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						<SauceCard />
						<SauceCard />
						<SauceCard />
						<SauceCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SauceList
