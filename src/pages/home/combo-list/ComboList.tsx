import ComboCard from './ComboCard'

const ComboList = () => {
	return (
		<div id='combo'>
			<div className='container'>
				<div className='my-[25px]'>
					<h2 className='text-black text-xl font-bold'>Kombo</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						<ComboCard />
						<ComboCard />
						<ComboCard />
						<ComboCard />
						<ComboCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ComboList
