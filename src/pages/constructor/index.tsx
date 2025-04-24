import { useConstructorStore } from '@/store/constructor-store'
import { IConstructor } from '@/utils/types'
import { ArchiveX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { ConstructorInfo, ConstructorModifier } from './components'

const ConstuctorPage = () => {
	const { constructors, getConstructors } = useConstructorStore()
	const [cards, setCards] = useState<IConstructor[]>([])

	useEffect(() => {
		getConstructors()
	}, [getConstructors])

	const handleClick = (id: IConstructor) => {
		if (cards.length >= 10) {
			setCards(prev => prev.filter(i => i !== id))
			toast("Faqat 10 ta masalliq qo'sha olasiz", {
				icon: <ArchiveX />,
				position: 'top-right',
				richColors: true,
			})
		} else {
			setCards(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]))
		}
	}

	return (
		<section>
			<div className='container'>
				<div className='grid grid-cols-[40%_60%] text-left'>
					<ConstructorInfo cards={cards} />
					<ConstructorModifier items={constructors} handleClick={handleClick} cards={cards} />
				</div>
			</div>
		</section>
	)
}

export default ConstuctorPage
