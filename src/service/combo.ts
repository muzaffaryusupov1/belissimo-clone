import { ICombo } from '@/utils/types'
import { combo, comboItem } from '@/utils/urls'
import axios from './axios'

const ComboService = {
	combo() {
		return axios.get<ICombo[]>(combo)
	},
	comboItem(slug: string) {
		return axios.get(comboItem(slug))
	},
}

export default ComboService
