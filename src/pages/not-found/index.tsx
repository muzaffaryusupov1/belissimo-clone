import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'

const NotFoundPage = () => {
	const navigate = useNavigate()

	const navigateToHome = (): void => {
		navigate('/')
	}
	return (
		<div className='fixed left-0 right-0 top-[50%] translate-y-[-50%]'>
			<div className='flex flex-row items-center justify-center mb-8'>
				<p className='text-[80px] font-black mx-[.8rem]'>4</p>
				<div className='w-[100px] h-[100px]'>
					<img
						src='/public/pizza404.webp'
						alt='404 image'
						className='w-full h-full object-contain'
					/>
				</div>
				<p className='text-[80px] font-black mx-[.8rem]'>4</p>
			</div>
			<p className='text-[15px] text-center mb-[.8rem]'>
				Aftidan, siz mavjud bo‘lmagan sahifaga kirdingiz :)
			</p>
			<p className='text-[15px] text-center mb-[.8rem]'>
				Keling, biz bu yerdan chiqishga yordam beramiz.
			</p>
			<div className='mt-8 flex flex-col items-center justify-center'>
				<Button
					className='w-[calc-(100%-50px)] max-w-[400px] rounded-[60px] my-[5px] text-base py-[15px] px-[25px]'
					onClick={navigateToHome}
				>
					Bosh menyuga qaytish
				</Button>
			</div>
		</div>
	)
}

export default NotFoundPage
