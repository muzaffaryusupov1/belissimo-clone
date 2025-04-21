import { DeliveryIcon, LocationIcon } from '@/assets/icons'
import { coinIcon } from '@/utils/helpers'
import { Link } from 'react-router-dom'
import HalalImg from '/halal-img.webp'
import SiteLogo from '/site-logo.svg'

const HeaderBottom = () => {
	return (
		<div className='py-[15px] flex items-center justify-between'>
			<div className='flex items-center gap-5'>
				<div className='w-[180px] h-[51px]'>
					<Link to='/'>
						<img src={SiteLogo} alt='site logo' />
					</Link>
				</div>
				<div className='flex gap-3 items-center justify-start'>
					<div className='flex w-11 h-11 flex-col justify-center items-center rounded-[8px] bg-[#f4f4f4]'>
						<span>
							<LocationIcon />
						</span>
					</div>
					<div className='flex flex-col justify-center select-none text-[#64748b] text-[13px] font-normal leading-normal not-italic'>
						<span>Shahar:</span>
						<a href='#'>Tashkent</a>
					</div>
				</div>
				<div className='w-full min-w-[210px] h-12 flex items-center rounded-sm py-[13px] px-[15px] max-w-[200px]'>
					<div className='flex w-24 h-11 flex-col justify-center items-center rounded-[8px] bg-[#f4f4f4]'>
						<span>
							<DeliveryIcon />
						</span>
					</div>
					<div className='ml-[10px]'>
						<p className='text-[10px] text-[#3f3f3f] not-italic font-normal select-none'>
							35 daqiqa ichida tekin yetkazib beramiz yoki pitsa bepul
						</p>
					</div>
				</div>
			</div>
			<div className='flex items-center gap-5'>
				<div className='cursor-pointer w-[50px] h-[50px]'>
					<img src={HalalImg} alt='img' />
				</div>
				<div className='flex items-center gap-[22px] pl-[22px] border-l border-[#f4f4f4]'>
					<div className='text-black flex flex-row items-center gap-1.5 text-[19px] font-bold'>
						<div className='w-8 h-8 cursor-pointer'>
							<img src={coinIcon} alt='coin icon' />
						</div>
						0
					</div>
					<button className='bg-[#006f4c] text-white border-none rounded-[60px] text-center font-bold text-base py-[15px] px-[25px] cursor-pointer block max-w-[400px] transition duration-200 ease-in hover:bg-[#009163]'>
						Kirish
					</button>
				</div>
			</div>
		</div>
	)
}

export default HeaderBottom
