import { Footer } from '@/components'
import {
	AboutDigital,
	AboutGuest,
	AboutImagine,
	AboutMisson,
	AboutQuality,
	AboutTeam,
	AboutTop,
} from './components'
import AboutStatistic from './components/AboutStatistic'

const AboutPage = () => {
	return (
		<>
			<main className='main'>
				<AboutTop />
				<AboutMisson />
				<AboutImagine />
				<AboutDigital />
				<AboutGuest />
				<AboutQuality />
				<AboutTeam />
				<AboutStatistic />
			</main>
			<Footer />
		</>
	)
}

export default AboutPage
