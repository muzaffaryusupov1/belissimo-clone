const AboutTeam = () => {
	return (
		<section id='about-team'>
			<div className='container'>
				<div className='py-[100px] max-md:py-10'>
					<div>
						<h1 className='text-black poppins text-[55px] not-italic font-medium leading-[1.181] tracking-[-1.1px] max-md:text-5xl max-sm:text-3xl'>
							Jamoa va insonlar
						</h1>
						<p className='text-black text-2xl not-italic font-normal leading-[1.5] tracking-[-.48px] mt-5 mb-[60px] max-md:mb-7 max-md:text-xl max-sm:text-lg'>
							Biz uchun xodimlarning ishga zavq bilan kelishi muhimdir. Shuning uchun biz har kuni
							ish muhitini yaxshilaymiz, mehnat bozoriga qarab ish haqini halol to'laymiz, eng
							yaxshilarini taqdirlaymiz va biz bilan ishlaydigan har bir hodimning o'sishiga yordam
							beramiz.
						</p>
					</div>
					<div>
						<div className='about-team-img'>
							<div>
								<img
									src='/about-page/about-team-section/about-team-img1.webp'
									alt='about-team-img1'
								/>
							</div>
							<div>
								<img
									src='/about-page/about-team-section/about-team-img2.webp'
									alt='about-team-img1'
								/>
							</div>
							<div>
								<img
									src='/about-page/about-team-section/about-team-img3.webp'
									alt='about-team-img1'
								/>
							</div>
						</div>
						<div className='about-team-img'>
							<div>
								<img
									src='/about-page/about-team-section/about-team-img4.webp'
									alt='about-team-img1'
								/>
							</div>
							<div>
								<img
									src='/about-page/about-team-section/about-team-img5.webp'
									alt='about-team-img1'
								/>
							</div>
							<div>
								<img
									src='/about-page/about-team-section/about-team-img6.webp'
									alt='about-team-img1'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutTeam
