import { AboutTopIcon } from '@/assets/icons'

const AboutTop = () => {
	return (
		<section id='about-top__block'>
			<div className='container'>
				<div className='py-5 flex flex-row items-center justify-between my-10 max-md:flex-col max-lg:items-start max-sm:py-1.5 max-sm:mt-2'>
					<div className='max-w-[800px] max-xl:max-w-[600px] max-lg:max-w-full'>
						<h1 className='poppins text-[70px] not-italic font-medium leading-[1.142] tracking-[-2.1px] select-none max-lg:text-5xl max-md:text-4xl'>
							<span>Biz </span>
							<span className='poppins not-italic text-[#9095a2] relative'>
								<div className='absolute top-0 max-xl:hidden'>
									<AboutTopIcon />
								</div>
								haqimizdagi mazzali
							</span>
							<span className='text-wrap'> ma’lumotlarning bir bo‘lagi</span>
						</h1>
						<p className='text-[#9095a2] text-2xl not-italic font-normal leading-[1.5] tracking-[-.48px] my-5 max-md:text-xl max-md:my-2.5'>
							Bellissimo pitsasining siri nimada? Shu haqida sizga so’zlab beramiz. Pitsamizning har
							bir bo’lagida baxtni topishingiz mumkin.
						</p>
					</div>
					<div className='w-[350px] h-[350px] max-md:w-full max-md:flex max-md:items-center max-md:justify-center max-sm:h-max'>
						<img src='/about-page/about-top-block-img1.webp' alt='about-top-block-image' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutTop
