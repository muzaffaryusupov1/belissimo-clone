import { Skeleton } from '@/components/ui/skeleton'

const BannerSkeleton = () => {
	return (
		<div className='flex flex-col space-y-3'>
			<Skeleton className='container h-[412px] bg-neutral-300' />
		</div>
	)
}

export default BannerSkeleton
