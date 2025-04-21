import { PenIcon } from '@/assets/icons'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Delivery = () => {
	return (
		<div className='mb-[25px]'>
			<div className='container'>
				<Tabs
					defaultValue='delivery'
					className='w-full h-full flex flex-row gap-[25px] items-center justify-between font-semibold text-sm leading-[18px] overflow-hidden pt-[25px]'
				>
					<TabsList className='w-[40%] h-fit rounded-[100px]'>
						<TabsTrigger value='delivery' className='rounded-[100px] cursor-pointer w-full h-12'>
							Yetkazib berish
						</TabsTrigger>
						<TabsTrigger value='takeAway' className='rounded-[100px] cursor-pointer w-full h-12'>
							Olib ketish
						</TabsTrigger>
					</TabsList>
					<TabsContent value='delivery' className='w-full'>
						<div className='bg-[#fffbee] border border-solid border-[#ffc600] w-full flex flex-col items-center justify-between py-[10px] px-[15px] rounded-[10px] cursor-pointer relative z-10'>
							<div className='w-full flex flex-row items-center justify-between'>
								<div className='flex flex-row items-center justify-start'>
									<p className='text-[#ffc600] text-sm leading-[1.307] font-semibold'>
										Yetkazib berish manzilini tanlang
									</p>
								</div>
								<div>
									<span>
										<PenIcon />
									</span>
								</div>
							</div>
						</div>
					</TabsContent>
					<TabsContent value='takeAway'>
						<div className='bg-[#fffbee] border border-solid border-[#ffc600] w-full flex flex-col items-center justify-between py-[10px] px-[15px] rounded-[10px] cursor-pointer relative z-10'>
							<div className='w-full flex flex-row items-center justify-between'>
								<div className='flex flex-row items-center justify-start'>
									<p className='text-[#ffc600] text-sm leading-[1.307] font-semibold'>
										Filialni tanlang
									</p>
								</div>
								<div>
									<span>
										<PenIcon />
									</span>
								</div>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}

export default Delivery
