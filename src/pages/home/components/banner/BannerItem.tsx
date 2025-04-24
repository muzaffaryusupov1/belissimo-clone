import { IBanner } from '@/utils/types'

type BannerItemProps = IBanner

const BannerItem = (props: BannerItemProps) => {
	const { image } = props
	return (
		<div className='w-max max-w-[1180px] h-[412px] max-md:h-full max-md:w-full flex items-center'>
			<img src={image} alt='banner img' draggable={false} className='object-cover' />
		</div>
	)
}

export default BannerItem
