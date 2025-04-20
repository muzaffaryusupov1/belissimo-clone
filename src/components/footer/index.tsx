import { FacebookIcon } from '@/assets/icons'
import InstagramIcon from '/instagram-icon.svg'
import TelegramIcon from '/telegram-icon.svg'

const Footer = () => {
	return (
		<footer className='bg-[#262a2c] mt-14'>
			<div className='container'>
				<div className='pt-[52px] px-5 pb-5 grid grid-cols-5 items-start justify-between gap-2.5'>
					<div className='mb-[30px]'>
						<h2 className='mb-5'>
							<a href='/'>
								<img src='/logo-footer.webp' alt='logo footer' />
							</a>
						</h2>
						<h4 className='text-white text-xs leading-[1.2222222222] uppercase font-normal'>
							Raqamga qo'ng'iroq qiling - <a href='tel:1174'>1174</a>
						</h4>
					</div>
					<ul className='my-0 mx-auto max-w-40'>
						<li className='mt-[7px] mb-2.5'>
							<a
								href='/'
								className='duration-75 ease-in hover:underline text-[#ffffff80] hover:text-white'
							>
								Biz haqimizda
							</a>
						</li>
						<li className='mt-[7px] mb-2.5'>
							<a
								href='/'
								className='duration-75 ease-in hover:underline text-[#ffffff80] hover:text-white'
							>
								Ommaviy oferta
							</a>
						</li>
						<li className='mt-[7px] mb-2.5'>
							<a
								href='/'
								className='duration-75 ease-in hover:underline text-[#ffffff80] hover:text-white'
							>
								Maxfiylik siyosati
							</a>
						</li>
						<li className='mt-[7px] mb-2.5'>
							<a
								href='/'
								className='duration-75 ease-in hover:underline text-[#ffffff80] hover:text-white'
							>
								Halol sertifikati
							</a>
						</li>
						<li className='mt-[7px] mb-2.5'>
							<a
								href='/'
								className='duration-75 ease-in hover:underline text-[#ffffff80] hover:text-white'
							>
								Restoranlar
							</a>
						</li>
					</ul>
					<ul className='my-0 mx-auto max-w-40'>
						<li className='mt-[7px] mb-2.5'>
							<a
								href='/'
								className='duration-75 ease-in hover:underline text-[#ffffff80] hover:text-white'
							>
								Bizning ish o'rinlarimiz
							</a>
						</li>
					</ul>
					<div className='mb-[30px] mx-auto text-center order-1'>
						<h3 className='text-base text-white mb-5 font-normal'>Bizni kuzatib boring</h3>
						<ul className='flex justify-between gap-[7px]'>
							<li className='w-6 h-6'>
								<a href='/' className='opacity-[.6] duration-200 ease-in-out hover:opacity-100'>
									<FacebookIcon />
								</a>
							</li>
							<li className='w-6 h-6'>
								<a href='/' className='opacity-[.6] duration-200 ease-in-out hover:opacity-100'>
									<img src={InstagramIcon} alt='instagram icon' />
								</a>
							</li>
							<li className='w-6 h-6'>
								<a href='/' className='opacity-[.6] duration-200 ease-in-out hover:opacity-100'>
									<img src={TelegramIcon} alt='instagram icon' />
								</a>
							</li>
						</ul>
					</div>
					<ul className='flex w-full gap-y-[18px] gap-x-[30px] flex-wrap justify-center my-0 mx-auto'>
						<li className='flex items-center justify-center basis-[calc(50%-15px)]'>
							<img src='/payme-icon.svg' alt='payme icon' />
						</li>
						<li className='flex items-center justify-center basis-[calc(50%-15px)]'>
							<img src='/uzcard-icon.svg' alt='uzcard icon' />
						</li>
						<li className='flex items-center justify-center basis-[calc(50%-15px)]'>
							<img src='/click-icon.svg' alt='click icon' />
						</li>
					</ul>
				</div>
			</div>
			<div className='w-full justify-center py-[30px] text-center'>
				<p className='text-base leading-[1.25] text-white'>© 2016-2025 Bellissimo Pizza.</p>
			</div>
		</footer>
	)
}

export default Footer
