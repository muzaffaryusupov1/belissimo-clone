import { Link } from 'react-router-dom'
import PistaCard from './PistaCard'

const PitsaList = () => {
	return (
		<div id='pitsa' className='scroll-mt-24'>
			<div className='container'>
				<div className='pt-2.5'>
					<h2 className='font-bold text-xl leading-[17px] text-black mb-[15px] mt-5'>Pitsa</h2>
					<div className='grid grid-cols-4 gap-[15px]'>
						<PistaCard />
						<div className='flex flex-col items-center justify-start p-5 bg-white shadow-[5px_2px_30px_hsla(257,8%,83%,0.3)] rounded-[14px] w-full mb-2 cursor-pointer duration-75 ease-in hover:scale-[1.02]'>
							<Link to='/constructor'>
								<div className='min-w-[105px] w-full h-full relative rounded-[14px] overflow-hidden'>
									<img
										sizes='100vw'
										src='/constructor/constructor-card-img.webp'
										alt='constructor-img'
										className='object-cover'
									/>
								</div>
								<div className='ml-[15px] flex flex-col justify-between items-start gap-11 w-full h-full pt-[10px]'>
									<div>
										<h3 className='font-normal text-lg leading-[17px] text-black mb-[5px]'>
											Konstruktor
										</h3>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PitsaList
