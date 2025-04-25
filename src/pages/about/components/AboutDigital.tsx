import { Badge } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutDigital = () => {
	return (
		<section id='about-digital' className='bg-[#e9edee] mt-[100px]'>
			<div className='container'>
				<div className='py-[140px] flex flex-col items-center justify-between max-lg:py-16'>
					<div>
						<h1 className='text-black poppins text-[55px] not-italic font-normal leading-[1.181] tracking-[-1.1px] max-md:text-3xl'>
							Raqamli yechimlar
						</h1>
						<p className='text-2xl text-[#9095a2] not-italic font-normal leading-[1.5] tracking-[-.48px] mt-5 mb-[60px] max-md:mb-6 max-md:text-xl'>
							Buyurtma berishda
							<span className='text-black'> qulaylik va tezlik </span>
							biz uchun eng muhimidir. Shuning uchun biz barcha smartfonlar uchun oddiy va
							<span className='text-black'> tushunarli dastur, veb-sayt va Telegram bot </span>
							yaratdik
						</p>
					</div>
					<div className='flex items-center justify-center gap-5 max-md:flex-col max-md:items-start max-md:justify-start max-md:w-full'>
						<div className='overflow-hidden relative text-center text-white rounded-[10px] h-full'>
							<div>
								<img
									src='/about-page/about-digital-section/img-1.webp'
									alt='img-1'
									className='object-cover object-center duration-1000 ease-linear hover:bg-blend-multiply hover:scale-[1.2]'
								/>
							</div>
							<div className='absolute top-10 left-10 poppins text-[32px] not-italic font-normal leading-[1.375] max-md:text-2xl'>
								Mobil dastur
							</div>
							<div className='absolute bottom-10 left-10 text-white text-base not-italic font-semibold leading-1 tracking-[-.32px]'>
								<p className='text-start mb-[15px]'>Hoziroq yuklab oling</p>
								<div className='flex items-center gap-[7px]'>
									<img src='/app-store.svg' alt='app-store-svg' />
									<img src='/google-play.svg' alt='google-play-svg' />
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-[15px] max-md:flex-row max-sm:flex-col max-md:gap-2'>
							<div className='overflow-hidden relative text-center text-white rounded-[10px] h-full'>
								<div>
									<img
										src='/about-page/about-digital-section/img-2.webp'
										alt='img-2'
										className='object-cover object-center duration-1000 ease-linear hover:bg-blend-multiply hover:scale-[1.2]'
									/>
								</div>
								<div className='text-black absolute top-10 left-10 poppins text-[32px] not-italic font-normal leading-[1.375] max-md:text-2xl'>
									<p className='text-center'>Telegram bot</p>
								</div>
								<Badge className='absolute bottom-10 left-10 py-[11.5px] px-[25px] rounded-[35px] text-black text-center text-base not-italic font-normal leading-normal bg-white max-md:py-2 max-md:px-3.5 max-md:rounded-2xl'>
									<a href='#'>@bellissimo_bot</a>
								</Badge>
							</div>
							<div className='overflow-hidden relative text-center text-white rounded-[10px] h-full'>
								<div>
									<img
										src='/about-page/about-digital-section/img-3.webp'
										alt='img-2'
										className='object-cover object-center duration-1000 ease-linear hover:bg-blend-multiply hover:scale-[1.2]'
									/>
								</div>
								<div className='text-black absolute top-10 left-10 poppins text-[32px] not-italic font-normal leading-[1.375] max-md:text-2xl'>
									<p className='text-center'>Veb sayt</p>
								</div>
								<Badge className='absolute bottom-10 left-10 py-[11.5px] px-[25px] rounded-[35px] text-black text-center text-base not-italic font-normal leading-normal bg-white max-md:py-2 max-md:px-3.5 max-md:rounded-2xl'>
									<Link to='/'>@www.bellissimo.uz</Link>
								</Badge>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutDigital
