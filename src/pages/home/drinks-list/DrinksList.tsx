import DrinksCard from './DrinksCard'

const DrinksList = () => {
	return (
		<div id='drinks'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-[20px] leading-[17px] text-black my-5'>Ichimliklar</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						<DrinksCard />
						<DrinksCard />
						<DrinksCard />
						<DrinksCard />
						<DrinksCard />
						<DrinksCard />
						<DrinksCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default DrinksList
