import { Link } from 'react-router-dom'
import PistaCard from './PistaCard'

const PitsaList = () => {
	return (
		<div id='pitsa' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-xl leading-[17px] text-black mb-[15px] mt-5'>Pitsa</h2>
					<div className='grid grid-cols-4 gap-[15px] max-lg:grid-cols-[repeat(2,_1fr)] max-md:grid-cols-1'>
						<PistaCard />
						<Link to='/constructor'>
							<div className='flex flex-col items-center justify-start p-5 bg-white shadow-[5px_2px_30px_hsla(257,8%,83%,0.3)] rounded-[14px] w-full mb-2 cursor-pointer duration-75 ease-in hover:scale-[1.02] max-lg:flex-row max-lg:items-start max-lg:w-full max-lg:h-full'>
								<div className='w-full h-auto relative rounded-[14px] overflow-hidden max-lg:w-[105px] max-lg:h-[100px]'>
									<img
										src='/constructor/constructor-card-img.webp'
										alt='constructor-img'
										className='object-cover w-full h-full'
									/>
								</div>
								<div className='ml-[15px] flex flex-col justify-between items-start gap-11 w-full h-full pt-[10px]'>
									<div>
										<h3 className='font-normal text-lg leading-[17px] text-black mb-[5px]'>
											Konstruktor
										</h3>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PitsaList
