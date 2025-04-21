import { IBanner } from '@/utils/types'

type BannerItemProps = IBanner

const BannerItem = (props: BannerItemProps) => {
	const { image } = props
	return (
		<div className='w-max max-w-[1180px] h-[412px] flex items-center'>
			<img src={image} alt='banner img' draggable={false} />
		</div>
	)
}

export default BannerItem
