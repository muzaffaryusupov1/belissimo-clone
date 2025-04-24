import { IConstructor } from '@/utils/types'
import { constructor } from '@/utils/urls'
import axios from './axios'

const ConstructorService = {
	constructor() {
		return axios.get<IConstructor[]>(constructor)
	},
}

export default ConstructorService
