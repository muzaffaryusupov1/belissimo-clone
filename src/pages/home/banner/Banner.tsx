import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import BannerItem from './BannerItem'

const Banner = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 1500 },
			items: 2,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}

	return (
		<div className='container'>
			<Carousel
				responsive={responsive}
				slidesToSlide={1}
				infinite={true}
				swipeable={true}
				minimumTouchDrag={100}
				showDots={true}
			>
				<BannerItem />
				<BannerItem />
				<BannerItem />
			</Carousel>
		</div>
	)
}

export default Banner
