import { useBannerStore } from '@/store/banner-store'
import { sliderResponsive } from '@/utils/helpers'
import { useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
// import BannerItem from './BannerItem'
import BannerItem from './BannerItem'
import BannerSkeleton from './skeleton/BannerSkeleton'

const Banner = () => {
	const { banner, getBanners, loading } = useBannerStore()

	useEffect(() => {
		getBanners()
	}, [getBanners])

	return (
		<div className='container'>
			{loading ? (
				<BannerSkeleton />
			) : (
				<Carousel
					responsive={sliderResponsive}
					slidesToSlide={1}
					infinite={true}
					swipeable={true}
					minimumTouchDrag={50}
					showDots={true}
					className='rounded-lg'
				>
					{banner.map(item => (
						<BannerItem key={item.id} id={item.id} image={item.image} />
					))}
				</Carousel>
			)}
		</div>
	)
}

export default Banner
