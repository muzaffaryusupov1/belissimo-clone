const AboutMisson = () => {
	return (
		<section id='about-mission' className='overflow-hidden about-misson__bg'>
			<div className='container'>
				<div className='flex flex-wrap max-lg:flex-col-reverse'>
					<div className='basis-[50%] h-[700px] max-lg:mt-6'>
						<img
							src='/about-page/about-mission-img1.webp'
							alt='about-mission-image'
							className='w-full h-full object-cover'
						/>
					</div>
					<div className='basis-[50%] pl-[50px] mt-[60px] max-lg:mt-10 max-md:mt-4 max-lg:w-full max-md:pl-0'>
						<div>
							<h1 className='poppins text-[#f7ddb2] text-[55px] not-italic font-medium leading-[1.181] tracking-[-1.1px] select-none max-lg:text-4xl'>
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
							<p className='text-white poppins text-[32px] not-italic font-normal leading-[1.375] mt-[100px] max-lg:mt-11 max-md:text-2xl'>
								Bizning jamoamiz har bir pitsada baxtning bir bo'lagi borligiga ishonadi.
							</p>
							<p className='text-white text-2xl not-italic font-normal leading-[1.5] tracking-[-.48px] mt-5 max-md:text-xl'>
								Shuning uchun biz doimo mazali pitsa buyurtma qilish imkoniyatiga ega bo'lishingiz
								uchun mehnat qilamiz. Siz uni do'stlaringiz bilan bo'lishishingiz, oila davrasida
								bahramand bo’lishingiz yoki shunchaki o'zingiz tanovul qilib zavqlanishingiz mumkin.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMisson
