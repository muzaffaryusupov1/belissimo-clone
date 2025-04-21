import DessertCard from './DessertCard'

const DessertList = () => {
	return (
		<div id='dessert' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-[20px] leading-[17px] text-black my-5'>Desertlar</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						<DessertCard />
						<DessertCard />
						<DessertCard />
						<DessertCard />
						<DessertCard />
						<DessertCard />
						<DessertCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default DessertList
