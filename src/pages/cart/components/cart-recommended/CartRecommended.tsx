import CartRecommendedItem from './CartRecommendedItem'

const CartRecommended = () => {
	return (
		<div>
			<h2 className='mt-[30px] mb-2.5 font-semibold text-[19px] leading-[19px] text-black'>
				Qo'shishni maslahat beramiz
			</h2>
			<div className='px-0.5 pt-2.5 pb-[13px] flex flex-row overflow-x-scroll'>
				<CartRecommendedItem />
			</div>
		</div>
	)
}

export default CartRecommended
