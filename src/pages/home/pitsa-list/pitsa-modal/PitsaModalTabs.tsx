import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ChevronDown, PenLineIcon } from 'lucide-react'

const PitsaModalTabs = () => {
	return (
		<Tabs
			defaultValue='delivery'
			className='w-auto font-semibold text-[13px] leading-[18px] mt-[5px]'
		>
			<TabsList className='w-full h-fit rounded-[100px]'>
				<TabsTrigger value='small' className='rounded-[100px] cursor-pointer w-full h-12'>
					Kichkina
				</TabsTrigger>
				<TabsTrigger value='average' className='rounded-[100px] cursor-pointer w-full h-12'>
					O'rtacha
				</TabsTrigger>
				<TabsTrigger value='big' className='rounded-[100px] cursor-pointer w-full h-12'>
					Katta
				</TabsTrigger>
			</TabsList>
			{/* Tabs Content */}
			<div className='flex'>
				<TabsContent value='small'>
					<TabsList className='w-full h-fit rounded-[100px]'>
						<TabsTrigger value='small' className='rounded-[100px] cursor-pointer w-full h-12'>
							Qalin
						</TabsTrigger>
					</TabsList>
				</TabsContent>
				<TabsContent value='average'>
					<TabsList className='w-full h-fit rounded-[100px]'>
						<TabsTrigger value='average' className='rounded-[100px] cursor-pointer w-full h-12'>
							Yupqa
						</TabsTrigger>

						<TabsTrigger value='average' className='rounded-[100px] cursor-pointer w-full h-12'>
							Qalin
						</TabsTrigger>
					</TabsList>
				</TabsContent>
				<TabsContent value='big'>
					<TabsList className='w-full h-fit rounded-[100px]'>
						<TabsTrigger value='small' className='rounded-[100px] cursor-pointer w-full h-12'>
							Yupqa
						</TabsTrigger>
						<TabsTrigger value='small' className='rounded-[100px] cursor-pointer w-full h-12'>
							Qalin
						</TabsTrigger>
					</TabsList>
				</TabsContent>
				<TabsContent value='small'>
					<div className='w-full flex justify-end items-center'>
						<Button
							className='bg-[#ffc600] my-[5px] border border-solid border-[#ffc600] text-black flex items-center justify-center gap-[5px] duration-200 ease-in py-2.5 rounded-[60px] text-center w-[180px] text-[14px] h-12 font-semibold hover:bg-amber-400 disabled:opacity-35'
							disabled
						>
							<span>
								<ChevronDown />
							</span>
							Bort qo'shish
						</Button>
					</div>
				</TabsContent>
				<TabsContent value='average'>
					<div className='w-full flex justify-end items-center'>
						<Button className='bg-[#ffc600] my-[5px] border border-solid border-[#ffc600] text-black flex items-center justify-center gap-[5px] duration-200 ease-in py-2.5 rounded-[60px] text-center w-[180px] text-[14px] h-12 font-semibold hover:bg-amber-400 disabled:opacity-35'>
							<span>
								<PenLineIcon />
							</span>
							Bortni o'zgartirish
						</Button>
					</div>
				</TabsContent>
			</div>
		</Tabs>
	)
}

export default PitsaModalTabs
