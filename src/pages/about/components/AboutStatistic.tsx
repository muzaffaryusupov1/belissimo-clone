import { statisticObj } from '@/utils/helpers'

const AboutStatistic = () => {
	return (
		<section id='about-statistic'>
			<div className='container'>
				<div className='mb-[168px]'>
					<div>
						<h1 className='text-black poppins text-[55px] not-italic font-medium leading-[1.181] tracking-[-1.1px]'>
							O‘sish ko'rsatkichlarimiz
						</h1>
						<p className='text-2xl not-italic font-normal leading-[1.5] tracking-[-.48px] mt-5 mb-[108px] text-[#9095a2]'>
							Biz yangiliklarni muntazam joriy qilamiz, yetkazib berishni
							<span className='text-black'> rivojlantiramiz va xizmat sifatini yaxshilaymiz. </span>
							Bu moliyaviy ko'rsatkichlarning
							<span className='text-black'> barqaror o'sishi </span>
							uchun asosdir.
						</p>
					</div>
					<div className='flex items-end gap-2.5 max-w-[1180px] my-0 mx-auto'>
						{statisticObj.map(item => (
							<div className='flex flex-col items-center text-[12px]' key={item.id}>
								<div className='mb-2.5 flex flex-col items-center'>
									<h2 className='text-black text-center text-[32px] font-medium leading-[68.75%]'>
										{item.title}
									</h2>
									<p className='text-[13px] font-normal leading-[22px] text-black text-center'>
										{item.description}
									</p>
								</div>
								<div className='flex flex-col items-center relative'>
									<div className='absolute -top-2 z-10'>
										<img src='/about-page/about-statistic-section/circle.svg' alt='circle-svg' />
									</div>
									<div>
										<img src='/about-page/about-statistic-section/line.svg' alt='line-svg' />
									</div>
									<div>
										<img src={item.image} alt='line-gradient-svg' />
									</div>
									<p>{item.year}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutStatistic
