const AboutQuality = () => {
	return (
		<section id='about-quality' className='bg-[#006945]'>
			<div className='container'>
				<div className='flex gap-10 justify-between max-lg:flex-col'>
					<div className='flex w-[60%] flex-row items-center justify-between max-lg:w-full'>
						<div className='items-center justify-between mt-[75px] max-lg:mt-8'>
							<h1 className='text-white poppins text-[55px] not-italic font-medium leading-[1.181] tracking-[-1.1px] max-md:text-4xl max-sm:text-2xl'>
								Sifat va standartlar
							</h1>
							<p className='text-2xl not-italic font-normal leading-9 tracking-[-.48px] mt-5 mb-[220px] text-white max-lg:mb-9 max-md:text-lg max-md:mb-3 max-md:mt-1.5 max-sm:text-base'>
								Hech qanday istesnolarsiz faqat
								<span className='text-[#8affb2]'> halol </span>
								mahsulotlar. Faqat
								<span className='text-[#8affb2]'> yangi </span>
								mahsulotlar. Faqat
								<span className='text-[#8affb2]'> eng yuqori sifatli </span>
								mahsulotlar.
							</p>
							<div className='max-md:w-52 max-md:h-52 max-sm:h-32 max-sm:w-32'>
								<img src='/about-leaf.svg' alt='leaf-svg' />
							</div>
						</div>
					</div>
					<div className='w-auto h-auto'>
						<img
							src='/about-page/about-quality-section-img1.webp'
							alt='about-quality-img'
							className='w-full h-full object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutQuality
