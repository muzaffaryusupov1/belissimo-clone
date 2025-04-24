import { AboutTopIcon } from '@/assets/icons'

const AboutTop = () => {
	return (
		<section id='about-top__block'>
			<div className='container'>
				<div className='py-5 flex flex-row items-center justify-between my-10'>
					<div className='max-w-[800px]'>
						<h1 className='poppins text-[70px] not-italic font-medium leading-[1.142] tracking-[-2.1px] select-none'>
							<span>Biz </span>
							<span className='poppins not-italic text-[#9095a2] relative'>
								<AboutTopIcon />
								haqimizdagi mazzali
							</span>
							<span className='text-wrap'> ma’lumotlarning bir bo‘lagi</span>
						</h1>
						<p className='text-[#9095a2] text-2xl not-italic font-normal leading-[1.5] tracking-[-.48px] my-5'>
							Bellissimo pitsasining siri nimada? Shu haqida sizga so’zlab beramiz. Pitsamizning har
							bir bo’lagida baxtni topishingiz mumkin.
						</p>
					</div>
					<div className='w-[350px] h-[350px]'>
						<img src='/about-page/about-top-block-img1.webp' alt='about-top-block-image' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutTop
