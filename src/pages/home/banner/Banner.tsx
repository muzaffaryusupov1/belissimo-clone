import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const Banner = () => {
	return (
		<div className='h-[412px] container'>
			<Swiper
				className='mySwiper'
				navigation={true}
				pagination={{ clickable: true }}
				modules={[Navigation, Pagination]}
				centeredSlides={true}
			>
				<SwiperSlide>
					<div>
						<img src='/banner/banner-img1.webp' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img src='/banner/banner-img2.webp' alt='' />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div>
						<img src='/banner/banner-img3.webp' alt='' />
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Banner
