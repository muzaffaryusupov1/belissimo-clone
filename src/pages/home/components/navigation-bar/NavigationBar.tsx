import { Button } from '@/components/ui/button'
import { useCartStore } from '@/store/cart-store'
import { useNavigationStore } from '@/store/navigation-store'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'

const NavigationBar = () => {
	const navbarRef = useRef<HTMLDivElement | null>(null)
	const [isSticky, setIsSticky] = useState(false)
	const navigate = useNavigate()
	const { items } = useCartStore()
	const { navs, getNavigationItems } = useNavigationStore()

	useEffect(() => {
		const handleScroll = () => {
			const navbar = navbarRef.current
			if (!navbar) return

			const rect = navbar.getBoundingClientRect()
			setIsSticky(rect.top === 0)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		getNavigationItems()
	}, [getNavigationItems])

	const scrollToId = (id: string) => {
		const el = document.getElementById(id)
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const navigateToCart = (): void => {
		navigate('/cart')
	}

	return (
		<div
			ref={navbarRef}
			className={`sticky top-0 overflow-hidden bg-white z-10 duration-300 ease-in-out max-md:mt-5 ${
				isSticky && 'shadow-[-5px_0_15px_rgba(0,0,0,0.2)] py-3 bg-black'
			}`}
		>
			<div className='container'>
				<div className='flex flex-row items-center justify-between gap-0'>
					<div className='flex flex-row items-center justify-start gap-[10px] overflow-x-scroll my-scroll'>
						<div
							className={`overflow-hidden duration-200 ease-in  ${
								isSticky ? 'opacity-100 max-w-10 w-full' : 'max-w-0 opacity-0'
							}`}
						>
							<div className='relative w-[35px] h-[35px] max-md:hidden'>
								<img src='/icon.webp' alt='site icon' />
							</div>
						</div>
						{navs?.map(item => {
							return (
								<Button
									key={item.id}
									onClick={() => scrollToId(item.navigate)}
									variant={'outline'}
									size={'sm'}
									className='rounded-4xl duration-300 bg-[#f4f4f4] hover:bg-[rgba(0,111,76,.25)] mt-2'
								>
									<a>{item.title}</a>
								</Button>
							)
						})}
					</div>
					<div className='max-md:hidden'>
						<Button
							variant={'destructive'}
							className='rounded-3xl duration-300 hover:px-[24px] font-normal'
							onClick={navigateToCart}
						>
							<span>Savatcha</span>
							<span className='border border-solid border-white h-full'></span>
							<span>{items.length}</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavigationBar
