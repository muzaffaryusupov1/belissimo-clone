import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetTitle,
} from '@/components/ui/sheet'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useModalStore } from '@/store/modal-store'
import { BookMarked } from 'lucide-react'
import { useNavigate } from 'react-router'

const MobileSheet = () => {
	const navigate = useNavigate()
	const { close, isOpen } = useModalStore()

	const handleClick = (slug: string) => {
		navigate(slug)
		close()
	}

	return (
		<Sheet open={isOpen} onOpenChange={close}>
			<SheetContent side='left' className='w-[00px] max-sm:w-[300px] z-[1111]'>
				<div className='px-2 py-5'>
					<div
						className='flex flex-row items-center justify-start bg-[#f6f6f7] my-[1em] rounded-2xl w-full cursor-pointer'
						onClick={() => handleClick('/login')}
					>
						<div className='w-10 h-10 mx-5 flex items-center justify-center'>
							<img src='/login.svg' alt='login-svg' />
						</div>
						<p className='leading-[73px] font-normal text-sm text-black w-full'>Kirish</p>
					</div>
					<div
						className='flex flex-row items-center justify-start bg-[#f6f6f7] my-[1em] rounded-2xl w-full cursor-pointer'
						onClick={() => handleClick('/')}
					>
						<div className='w-10 h-10 mx-5 flex items-center justify-center'>
							<img src='/menu-pitsa.svg' alt='menu-pitsa-svg' />
						</div>
						<p className='leading-[73px] font-normal text-sm text-black w-full'>Menu</p>
					</div>
					<div
						className='flex flex-row items-center justify-start bg-[#f6f6f7] my-[1em] rounded-2xl w-full cursor-pointer'
						onClick={() => handleClick('/about/company')}
					>
						<div className='w-10 h-10 mx-5 flex items-center justify-center'>
							<BookMarked />
						</div>
						<p className='leading-[73px] font-normal text-sm text-black w-full'>Biz haqimizda</p>
					</div>
				</div>
				<SheetFooter>
					<SheetTitle>Til</SheetTitle>
					<Tabs defaultValue='uz' className='w-full'>
						<TabsList className='w-full h-fit rounded-[100px]'>
							<TabsTrigger value='uz' className='rounded-[100px] cursor-pointer w-full h-12'>
								<SheetDescription>O'zbek tili</SheetDescription>
							</TabsTrigger>
							<TabsTrigger value='ru' className='rounded-[100px] cursor-pointer w-full h-12'>
								<SheetDescription>Русский язык</SheetDescription>
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default MobileSheet
