import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { useComboItemStore } from '@/store/combo-item-store'
import { saleLine } from '@/utils/helpers'
import { ICombo } from '@/utils/types'
import { Check, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'sonner'
import LoaderPage from '../loader'

const ComboPage = () => {
	const { comboItem, getComboItem, loading } = useComboItemStore()
	const { addToCart } = useCartStore()
	const navigate = useNavigate()

	const { slug } = useParams()

	useEffect(() => {
		if (slug) {
			getComboItem(slug)
		}
	}, [getComboItem, slug])

	if (loading) return <LoaderPage />

	const addCart = (item: ICombo) => {
		addToCart({ ...item, quantity: 1, constructor: [] })
		toast(`${item.title} savatga qo'shildi`, {
			position: 'top-right',
			richColors: true,
			closeButton: true,
			icon: <Check />,
		})

		navigate('/')
	}

	return (
		<div className='container'>
			<div className='combo-grid'>
				<div>
					<div className='rounded-[28px] overflow-hidden'>
						<img src={comboItem?.image} alt={comboItem?.title} />
					</div>
					<div className='p-[25px] max-md:py-3 max-md:px-2'>
						<h1 className='font-bold text-[27px] leading-[19px] text-black max-sm:text-lg'>
							{comboItem?.title}
						</h1>
						<p className='mt-[15px] font-normal text-[15px] leading-[18px] text-black max-md:mt-1.5 max-sm:text-xs'>
							{comboItem?.description}
						</p>
					</div>
				</div>
				<div>
					<div className='mb-[50px!important] cursor-pointer'>
						<div className='flex flex-col gap-1.5'>
							<div className='flex flex-row items-center justify-between py-[15px] pr-[15px] pl-5 shadow-[5px_2px_40px_hsla(257,8%,83%,.25)] m-[5px] mx-[25px] duration-100 ease-in bg-white hover:scale-[1.03] hover:shadow-[5px_2px_40px_hsla[257,8%,83%,.25]] max-md:mx-0 max-sm:py-2 max-sm:pr-2 max-sm:pl-3'>
								<div className='flex flex-col'>
									<h3 className='font-normal text-[15px] leading-[17px] text-black opacity-70'>
										Пицца
									</h3>
									<p className='font-semibold text-[calc(18px-1px)] leading-5 opacity-95 mt-[5px]'>
										Tanlash
									</p>
								</div>
								<ChevronRight />
							</div>
							<div className='flex flex-row items-center justify-between py-[15px] pr-[15px] pl-5 shadow-[5px_2px_40px_hsla(257,8%,83%,.25)] m-[5px] mx-[25px] duration-100 ease-in bg-white hover:scale-[1.03] hover:shadow-[5px_2px_40px_hsla[257,8%,83%,.25]] max-md:mx-0 max-sm:py-2 max-sm:pr-2 max-sm:pl-3'>
								<div className='flex flex-col'>
									<h3 className='font-normal text-[15px] leading-[17px] text-black opacity-70'>
										Стрипсы
									</h3>
									<p className='font-semibold text-[calc(18px-1px)] leading-5 opacity-95 mt-[5px]'>
										Tanlash
									</p>
								</div>
								<ChevronRight />
							</div>
							<div className='flex flex-row items-center justify-between py-[15px] pr-[15px] pl-5 shadow-[5px_2px_40px_hsla(257,8%,83%,.25)] m-[5px] mx-[25px] duration-100 ease-in bg-white hover:scale-[1.03] hover:shadow-[5px_2px_40px_hsla[257,8%,83%,.25]] max-md:mx-0 max-sm:py-2 max-sm:pr-2 max-sm:pl-3'>
								<div className='flex flex-col'>
									<h3 className='font-normal text-[15px] leading-[17px] text-black opacity-70'>
										Картошка фри
									</h3>
									<p className='font-semibold text-[calc(18px-1px)] leading-5 opacity-95 mt-[5px]'>
										Tanlash
									</p>
								</div>
								<ChevronRight />
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center justify-center gap-6 p-0 mb-[30px] max-md:mb-5 max-sm:mb-3'>
						<div className='w-full flex flex-row justify-between items-end gap-2.5 max-sm:gap-1.5'>
							<p className='font-bold text-[calc(19px-1px)] leading-[23px] text-black max-sm:text-base'>
								Umumiy narx:
							</p>
							<div className='flex flex-col items-end gap-[5px] max-sm:gap-0.5'>
								<div className='relative text-[#8d8d8d] font-normal max-sm:text-xs'>
									<div className='absolute w-full'>
										<img src={saleLine} alt='stroke' className='w-full' />
									</div>
									<p>{comboItem?.oldPrice?.toLocaleString()} so'm</p>
								</div>
								<p className='font-extrabold text-[calc(19px+3px)] leading-[19px] text-right text-black max-sm:text-base'>
									{comboItem?.price?.toLocaleString()} so'm
								</p>
							</div>
						</div>

						<Button
							className='bg-[#006f4c] text-white border-none rounded-[60px] text-center font-bold text-base py-[15px] px-[25px] my-[1em] mx-[25px] w-full duration-200 ease-in-out hover:bg-[#009163]'
							onClick={() => addCart(comboItem!)}
							disabled={comboItem === null}
						>
							Savatga qo'shish
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ComboPage
