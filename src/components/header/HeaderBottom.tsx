import { DeliveryIcon, LocationIcon } from '@/assets/icons'
import { coinIcon } from '@/utils/helpers'
import { ShoppingCart } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import MobileSheet from '../modals/mobile-sheet'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import HalalImg from '/halal-img.webp'
import SiteLogo from '/site-logo.svg'

const HeaderBottom = () => {
	const navigate = useNavigate()

	return (
		<div className='container'>
			<div className='py-[15px] flex items-center justify-between'>
				<div className='flex items-center gap-5'>
					<div className='w-[180px] h-[51px] max-md:hidden'>
						<Link to='/'>
							<img src={SiteLogo} alt='site logo' />
						</Link>
					</div>
					<div className='flex gap-3 items-center justify-start max-md:hidden'>
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
					<div className='hidden max-md:block'>
						<MobileSheet />
					</div>
					<div className='w-full min-w-[210px] h-12 flex items-center rounded-sm py-[13px] px-[15px] max-w-[200px] max-[850px]:hidden'>
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
					<div className='cursor-pointer w-[50px] h-[50px] max-md:hidden'>
						<img src={HalalImg} alt='img' />
					</div>
					<div className='flex items-center gap-[22px] pl-[22px] border-l border-[#f4f4f4] max-md:hidden'>
						<div className='text-black flex flex-row items-center gap-1.5 text-[19px] font-bold'>
							<div className='w-8 h-8 cursor-pointer'>
								<img src={coinIcon} alt='coin icon' />
							</div>
							0
						</div>
						<Button
							className='bg-[#006f4c] text-white border-none rounded-[60px] text-center font-bold text-base py-[15px] px-[25px] cursor-pointer max-w-[400px] transition duration-200 ease-in hover:bg-[#009163]'
							onClick={() => navigate('/login')}
						>
							Kirish
						</Button>
					</div>
					<Button className='relative max-md:block hidden' variant={'ghost'}>
						<ShoppingCart />
						<Badge className='absolute -top-0.5 left-6 bg-[#ff002b] h-[15px] w-[15px] rounden-[50%] flex items-center justify-center text-white text-[11px]'>
							1
						</Badge>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default HeaderBottom
