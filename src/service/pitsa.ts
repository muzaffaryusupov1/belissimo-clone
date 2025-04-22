import { IPitsa } from '@/utils/types'
import { pizza, pizzaItem } from '@/utils/urls'
import axios from './axios'

const PitsaService = {
	pitsa() {
		return axios.get<IPitsa[]>(pizza)
	},
	pitsaItem(id: number) {
		return axios.get(pizzaItem(id))
	},
}

export default PitsaService
