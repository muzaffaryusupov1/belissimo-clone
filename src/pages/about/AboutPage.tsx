import { AboutTopIcon } from '@/assets/icons'
import { Footer } from '@/components'

const AboutPage = () => {
	return (
		<>
			<main className='main'>
				<section>
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
									Bellissimo pitsasining siri nimada? Shu haqida sizga so’zlab beramiz. Pitsamizning
									har bir bo’lagida baxtni topishingiz mumkin.
								</p>
							</div>
							<div className='w-[350px] h-[350px]'>
								<img src='/about-page/about-top-block-img1.webp' alt='about-top-block-image' />
							</div>
						</div>
					</div>
				</section>

				<section className='overflow-hidden about-misson__bg'>
					<div className='container'>
						<div className='flex flex-wrap'>
							<div className='basis-[50%] h-[700px]'>
								<img
									src='/about-page/about-mission-img1.webp'
									alt='about-mission-image'
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='basis-[50%] pl-[50px] mt-[60px]'>
								<div>
									<h1 className='poppins text-[#f7ddb2] text-[55px] not-italic font-medium leading-[1.181] tracking-[-1.1px] select-none'>
										<div className='poppins flex items-center gap-2'>
											<span>Bizning</span>
											<span>
												<img src='/goal-icon.svg' alt='svg' />
											</span>
										</div>
										<span>missiyamiz</span>
									</h1>
								</div>
								<div className='select-none'>
									<p className='text-white poppins text-[32px] not-italic font-normal leading-[1.375] mt-[100px]'>
										Bizning jamoamiz har bir pitsada baxtning bir bo'lagi borligiga ishonadi.
									</p>
									<p className='text-white text-2xl not-italic font-normal leading-[1.5] tracking-[-.48px] mt-5'>
										Shuning uchun biz doimo mazali pitsa buyurtma qilish imkoniyatiga ega
										bo'lishingiz uchun mehnat qilamiz. Siz uni do'stlaringiz bilan bo'lishishingiz,
										oila davrasida bahramand bo’lishingiz yoki shunchaki o'zingiz tanovul qilib
										zavqlanishingiz mumkin.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default AboutPage
