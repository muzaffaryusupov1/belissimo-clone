import { TypeNavigation } from '@/utils/types'
import { navigation } from '@/utils/urls'
import axios from './axios'

const NavigationService = {
	navigation() {
		return axios.get<TypeNavigation[]>(navigation)
	},
}

export default NavigationService
