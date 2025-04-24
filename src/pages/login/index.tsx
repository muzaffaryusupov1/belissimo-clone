import { Button } from '@/components/ui/button'

const LoginPage = () => {
	return (
		<div className='w-full flex items-center justify-center overflow-hidden h-[calc(100vh-calc(100px+1rem))] max-w-[400px] m-auto'>
			<form className='block p-[25px] w-full'>
				<h1 className='text-center not-italic font-normal text-[27px] flex items-center mt-0 mb-[1em] mx-auto justify-center'>
					Raqamingizni kiriting
				</h1>
				<input
					type='number'
					className='text-[#757575] w-full border-none rounded-[12px] p-2.5 mb-[1rem] bg-[#f4f4f4] text-center not-italic font-normal text-[27px] flex items-center input-style'
					placeholder='+998 (__) ___-__-__'
				/>
				<Button
					className='w-full bg-[#262a2c] border-none rounded-[60px] text-center text-white font-bold text-base py-[15px] px-[25px] mt-2 cursor-pointer max-w-[400px] duration-300 ease-in-out hover:bg-[3e4345]'
					disabled
				>
					Kodni qabul qilish
				</Button>
			</form>
		</div>
	)
}

export default LoginPage
