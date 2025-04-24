import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { BookMarked, Text } from 'lucide-react'
import { useNavigate } from 'react-router'

const MobileSheet = () => {
	const navigate = useNavigate()

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='ghost'>
					<Text />
				</Button>
			</SheetTrigger>
			<SheetContent side='left' className='w-[300px] sm:w-[240px] z-[1111]'>
				<div className='px-2 py-5'>
					<div
						className='flex flex-row items-center justify-start bg-[#f6f6f7] my-[1em] rounded-2xl w-full cursor-pointer'
						onClick={() => navigate('/login')}
					>
						<div className='w-10 h-10 mx-5'>
							<img src='/login.svg' alt='login-svg' />
						</div>
						<p className='leading-[73px] font-normal text-sm text-black w-full'>Kirish</p>
					</div>
					<div
						className='flex flex-row items-center justify-start bg-[#f6f6f7] my-[1em] rounded-2xl w-full cursor-pointer'
						onClick={() => navigate('/')}
					>
						<div className='w-10 h-10 mx-5'>
							<img src='/menu-pitsa.svg' alt='menu-pitsa-svg' />
						</div>
						<p className='leading-[73px] font-normal text-sm text-black w-full'>Menu</p>
					</div>
					<div
						className='flex flex-row items-center justify-start bg-[#f6f6f7] my-[1em] rounded-2xl w-full cursor-pointer'
						onClick={() => navigate('/about/company')}
					>
						<div className='w-10 h-10 mx-5'>
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
