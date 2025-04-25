const AboutGuest = () => {
	return (
		<section id='about-guest'>
			<div className='container'>
				<div className='my-16 py-5 flex flex-row items-center justify-between max-lg:flex-col max-lg:py-3 max-lg:my-8'>
					<div>
						<h1 className='text-black poppins text-[55px] not-italic font-medium leading-[1.181] tracking-[-1.1px] max-md:text-3xl'>
							E'tiborni mijozga qaratish
						</h1>
						<div className='mt-[150px] max-md:mt-10'>
							<div className='max-md:w-32 max-md:h-14'>
								<img
									src='/about-page/about-guest-section/triple-heart.svg'
									alt='triple-heart-svg'
								/>
							</div>
							<h3 className='text-[#bf2e2b] poppins text-[32px] not-italic font-normal leading-[1.375] mt-6 mb-[30px] max-md:mt-2 max-md:mb-5 max-md:text-2xl'>
								Mijozlarsiz ishimizdan ma’ni yo'q
							</h3>
							<p className='text-2xl not-italic font-normal leading-[1.5] tracking-[-.48px] text-[#9095a2] max-md:text-lg'>
								Bellissimo pitsada
								<span className='text-[#222]'> asosiy narsa </span>
								bizning pitsamizni
								<span className='text-[#222]'> chin dildan sevadigan insonlardir.</span>
								Biz mahsulotlarimizdan
								<span className='text-[#222]'> zavqlanishingiz </span>
								va imkon qadar
								<span className='text-[#222]'> tez-tez bizga oshiqishingiz </span>
								uchun qo’limizdan kelgancha harakat qilamiz.
							</p>
						</div>
					</div>
					<div className='w-full max-md:h-72 max-md:w-72'>
						<div className='grid grid-cols-[repeat(2,_auto)] cursor-pointer about-guest-images max-lg:justify-center'>
							<div>
								<img
									src='/about-page/about-guest-section/slice-pizza-part1.webp'
									alt='sliced-pizza-part1'
									className='duration-150'
								/>
							</div>
							<div>
								<img
									src='/about-page/about-guest-section/slice-pizza-part2.webp'
									alt='sliced-pizza-part2'
									className='duration-150'
								/>
							</div>
							<div>
								<img
									src='/about-page/about-guest-section/slice-pizza-part3.webp'
									alt='sliced-pizza-part3'
									className='duration-150 -translate-y-[2px]'
								/>
							</div>
							<div>
								<img
									src='/about-page/about-guest-section/slice-pizza-part4.webp'
									alt='sliced-pizza-part4'
									className='duration-150'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutGuest
