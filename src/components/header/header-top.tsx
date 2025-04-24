import { PhoneIcon } from '@/assets/icons'
import { coinIcon } from '@/utils/helpers'
import { UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'

const HeaderTop = () => {
	return (
		<div className='max-md:bg-[#006f4c]'>
			<div className='container'>
				<div className='border-b border-[#f4f4f4] py-[15px] flex flex-row items-center justify-between max-md:py-2.5 '>
					<div className='flex flex-row items-center justify-start gap-[30px] text-lg text-[#828282] max-md:gap-4 max-md:hidden'>
						<a
							href='tel:1174'
							className='flex flex-row items-center gap-1.5 text-[#006f4c] font-extrabold text-lg'
						>
							<span>
								<PhoneIcon />
							</span>
							<span>1174</span>
						</a>
						<Link to='/about/company' className='text-[#828282]'>
							Biz haqimizda
						</Link>
						<a href='https://jobs.bellissimo.uz/' className='text-[#828282]'>
							Bo'sh ish o'rinlari
						</a>
					</div>
					<div className='text-white flex flex-row items-center gap-1.5 text-[19px] font-bold'>
						<div className='w-8 h-8 cursor-pointer'>
							<img src={coinIcon} alt='coin icon' />
						</div>
						0
					</div>
					<div className='max-md:hidden'>
						<Select>
							<SelectTrigger className='cursor-pointer'>
								<SelectValue placeholder='Til' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value='uz' className='cursor-pointer'>
										<img src='/UzFlagIcon.svg' alt='uz flag icon' />
										<span>UZ</span>
									</SelectItem>
									<SelectItem value='ru' className='cursor-pointer'>
										<img src='/RuFlagIcon.svg' alt='uz flag icon' />
										<span>РУ</span>
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					<div>
						<Button className='flex flex-row items-center justify-center bg-white py-1.5 px-3 rounded-[100px] font-semibold text-base text-black'>
							<UserRound />
							Kirish
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderTop
