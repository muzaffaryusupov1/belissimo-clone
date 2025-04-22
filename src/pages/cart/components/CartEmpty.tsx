import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

const CartEmpty = () => {
	const navigate = useNavigate()

	const navigateToHome = (): void => {
		navigate('/')
	}
	return (
		<div className='fixed top-[148px] left-0 bottom-0 right-0 bg-white flex flex-col items-center justify-center text-center px-[25px]'>
			<div className='w-[210px] h-[210px]'>
				<img src='/cart-empty.svg' alt='empty cart image' />
			</div>
			<h3 className='mt-[50px] mb-5 font-bold text-[calc(27px-3px)] leading-[29px] text-center text-black'>
				Hozircha sizning savatchangiz boʻsh 😕
			</h3>
			<Button
				className='border-none rounded-[60px] text-center text-white font-bold py-[15px] px-[25px] w-[calc(100%-50px)] my-8 mx-[25px] max-w-[400px]'
				onClick={navigateToHome}
			>
				Menyuni ko'rish
			</Button>
		</div>
	)
}

export default CartEmpty
