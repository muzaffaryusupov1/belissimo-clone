import { PhoneIcon } from '@/assets/icons'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../ui/select'
import RuFlagIcon from '/RuFlagIcon.svg'
import UzFlagIcon from '/UzFlagIcon.svg'

const HeaderTop = () => {
	return (
		<div className='border-b border-[#f4f4f4] py-[15px] flex flex-row items-center justify-between'>
			<div className='flex flex-row items-center justify-start gap-[30px] text-lg text-[#828282]'>
				<a
					href='tel:1174'
					className='flex flex-row items-center gap-1.5 text-[#006f4c] font-extrabold text-lg'
				>
					<span>
						<PhoneIcon />
					</span>
					<span>1174</span>
				</a>
				<a href='/about/company' className='text-[#828282]'>
					Biz haqimizda
				</a>
				<a href='https://jobs.bellissimo.uz/' className='text-[#828282]'>
					Bo'sh ish o'rinlari
				</a>
			</div>
			<div>
				<Select>
					<SelectTrigger className='w-[180px]'>
						<SelectValue placeholder='Til' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Select</SelectLabel>
							<SelectItem value='apple'>
								<img src={UzFlagIcon} alt='uz flag' />
								<span>Uz</span>
							</SelectItem>
							<SelectItem value='apple'>
								<img src={RuFlagIcon} alt='ru flag' />
								<span>РУ</span>
							</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}

export default HeaderTop
