const AboutImagine = () => {
	return (
		<section id='about-imagine'>
			<div className='container'>
				<div className='p-5 flex flex-row items-center justify-between gap-[30px] my-16'>
					<div>
						<h1 className='text-black poppins text-[55px] not-italic font-normal leading-[1.181] tracking-[-1.1px] '>
							Bizning tasavvurimiz
						</h1>
						<p className='text-2xl not-italic font-normal leading-[1.5] tracking-[-.48px] mt-16 text-[#9095a2]'>
							<span className='text-black'> Yaxshi narsalar ko'proq </span>
							bo'lishi kerak. Biz ishonamizki, har bir
							<span className='text-black'> yangi pitseriya </span>
							yuzlab oilalarning xursandchiligi va birlashishi uchun sababdir. Shu sababdan biz
							doimo o’z ish faoliyatimizni
							<span className='text-black'> yanada kengaytirib bormoqdamiz.</span>
						</p>
					</div>
					<div className='about-imagine__wrapper'>
						<div className='min-w-[200px] overflow-hidden about-grid-area-1 rounded-[70px]'>
							<img
								src='/about-page/about-imagine-section/img-1.webp'
								alt='about-img1'
								className='duration-1000 ease-linear hover:bg-blend-multiply hover:scale-[1.3]'
							/>
						</div>
						<div className='min-w-[200px] overflow-hidden about-grid-area-2 rounded-[70px]'>
							<img
								src='/about-page/about-imagine-section/img-2.webp'
								alt='about-img1'
								className='duration-1000 ease-linear hover:bg-blend-multiply hover:scale-[1.3]'
							/>
						</div>
						<div className='min-w-[200px] overflow-hidden about-grid-area-3 rounded-[70px]'>
							<img
								src='/about-page/about-imagine-section/img-3.png'
								alt='about-img1'
								className='duration-1000 ease-linear hover:bg-blend-multiply hover:scale-[1.3]'
							/>
						</div>
						<div className='min-w-[200px] overflow-hidden about-grid-area-4 rounded-[70px]'>
							<img
								src='/about-page/about-imagine-section/img-4.png'
								alt='about-img1'
								className='duration-1000 ease-linear hover:bg-blend-multiply hover:scale-[1.3]'
							/>
						</div>
						<div className='min-w-[200px] overflow-hidden about-grid-area-5 rounded-[70px]'>
							<img
								src='/about-page/about-imagine-section/img-5.webp'
								alt='about-img1'
								className='duration-1000 ease-linear hover:bg-blend-multiply hover:scale-[1.3]'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutImagine
