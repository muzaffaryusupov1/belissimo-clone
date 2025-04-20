import SnackCard from './SnackCard'

const SnackList = () => {
	return (
		<div id='snack'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-xl leading-[17px] text-black mb-[15px] mt-5'>Gazaklar</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						<SnackCard />
						<SnackCard />
						<SnackCard />
						<SnackCard />
						<SnackCard />
						<SnackCard />
						<SnackCard />
					</div>
				</div>
			</div>
		</div>
	)
}

export default SnackList
