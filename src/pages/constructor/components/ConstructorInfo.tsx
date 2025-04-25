import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { toaster } from '@/utils/helpers'
import { ICombo, IConstructor } from '@/utils/types'
import { useNavigate } from 'react-router'

const ConstructorInfo = (props: { cards: IConstructor[] }) => {
	const { cards } = props
	const { addToCart } = useCartStore()
	const navigate = useNavigate()

	const subtotal = cards.reduce((a, b) => a + b.price, 37000)

	const addCart = () => {
		const constructorObj: ICombo = {
			id: 1,
			description: '',
			discount: 0,
			oldPrice: 0,
			showOldPrice: false,
			slug: '',
			title: 'kichkina',
			image: '/constructor/constructor-card-img.webp',
			price: subtotal,
			constructor: [...cards],
		}

		addToCart({ ...constructorObj, quantity: 1 })
		toaster(constructorObj.title, "savatga qo'shildi")
		navigate('/')
	}

	return (
		<div>
			<div className='flex flex-row justify-between rounded-[22px] constructor-img__bg m-[1em] items-center max-md:mx-0'>
				<img src='/constructor/constructor-page-img.webp' alt='constructor-page-img' />
			</div>
			<div className='m-[1em] py-3 px-[23px] bg-[#f4f4f4] rounded-[26px] shadow-[0px_3px_15px_hsla(0,0%,85%,.3)] max-sm:py-1.5 max-sm:rounded-2xl max-md:px-1.5 max-md:mx-0'>
				{cards.length === 0 && (
					<p className='inline-block text-lg font-bold leading-5 text-red-500 mr-0.5 max-sm:text-sm'>
						Masalliq qo'shing
					</p>
				)}
				{cards?.map(item => (
					<p
						key={item.id}
						className='inline-block text-lg font-bold leading-5 text-black mr-0.5 max-sm:text-sm'
					>
						{`${item.title}, `}
					</p>
				))}
			</div>
			<div>
				<div className='shadow-none bg-white'>
					<div className='ml-1 px-[23px] mt-5 max-md:ml-0 max-md:mt-1.5 max-md:px-0'>
						<p className='font-normal text-base poppins'>
							Pitsa Kattaligi: <span className='font-semibold'>kichik</span>
						</p>
					</div>
					<div className='grid grid-cols-[40%_60%] items-center py-[15px] px-[25px] bg-white max-lg:flex max-lg:flex-col max-lg:items-start max-md:px-0'>
						<p className='font-bold text-xl leading-[19px] max-lg:mb-2.5 max-md:text-base'>
							{subtotal.toLocaleString()} so'm
						</p>
						<Button
							className='w-full m-0 text-base disabled:bg-[#d4d4d4] text-white bg-[#006f4c] border-none rounded-[60px] text-center font-bold py-[15px] px-[25px] cursor-pointer disabled:cursor-not-allowed duration-200 ease-in-out hover:bg-[#009163] max-sm:py-2 max-sm:px-3.5 max-sm:rounded-3xl'
							onClick={addCart}
							disabled={!cards.length}
						>
							Savatga qo'shish
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConstructorInfo
