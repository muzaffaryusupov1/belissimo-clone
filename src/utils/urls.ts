export const banner: string = '/banner'
export const combo: string = '/combos'
export const comboItem = (slug: string): string => `/combos/?slug=${slug}`
export const navigation: string = '/navigation'
export const pizza: string = '/pizza'
export const pizzaItem = (id: number): string => `/pizza/?id=${id}`

export const getProductsUrl = (slug: string) => `/products/?slug=${slug}`
export const productsItem = (id: number): string => `/products/?id=${id}`
export const constructor: string = '/constructor'
