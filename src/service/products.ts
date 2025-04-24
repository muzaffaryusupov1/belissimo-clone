import { ICart } from '@/utils/types'
import { getProductsUrl, productsItem } from '@/utils/urls'
import axios from './axios'

const ProductsService = {
	getProducts(slug: string) {
		return axios.get<ICart[]>(getProductsUrl(slug))
	},
	getProductsItem(id: number) {
		return axios.get(productsItem(id))
	},
}

export default ProductsService
