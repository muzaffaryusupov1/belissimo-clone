import { IBanner } from '@/utils/types'
import { banner } from '@/utils/urls'
import axios from './axios'

const BannerService = {
	banner() {
		return axios.get<IBanner[]>(banner)
	},
}

export default BannerService
