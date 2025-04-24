const AboutQuality = () => {
	return (
		<section id='about-quality' className='bg-[#006945]'>
			<div className='container'>
				<div className='flex gap-10 justify-between'>
					<div className='flex w-[60%] flex-row items-center justify-between'>
						<div className='items-center justify-between mt-[75px]'>
							<h1 className='text-white poppins text-[55px] not-italic font-medium leading-[1.181] tracking-[-1.1px]'>
								Sifat va standartlar
							</h1>
							<p className='text-2xl not-italic font-normal leading-9 tracking-[-.48px] mt-5 mb-[220px] text-white'>
								Hech qanday istesnolarsiz faqat
								<span className='text-[#8affb2]'> halol </span>
								mahsulotlar. Faqat
								<span className='text-[#8affb2]'> yangi </span>
								mahsulotlar. Faqat
								<span className='text-[#8affb2]'> eng yuqori sifatli </span>
								mahsulotlar.
							</p>
							<div>
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
