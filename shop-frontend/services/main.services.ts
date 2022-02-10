import { ImageType } from '../types/image.type'
import { backendUrl } from '../vars'

export interface ICategories {
  name: string
  price: number
  image: ImageType
  link: string
}

export interface IDataMy {
  telephone: string
  email: string
  ip: string
  ogrn: string
  inn: string
  vk: string
  instagram: string
  tiktok: string
  logo: ImageType
}

export interface IProduct {
  name: string
  id: number
  price: number
  description: string
  availability: boolean
  image: ImageType
  hover: ImageType
  category: any
}

export default class mainServices {
  static async getCategories(): Promise<ICategories[]> {
    let result: ICategories[] = []
    const categories = await fetch(`${backendUrl}/categories`)
      .then((res) => res.json())
      .catch((e) => {
        console.log(e)
        return [] as ICategories[]
      })
    if (!categories.statusCode) {
      result = categories
    }
    return result
  }

  static async getDataMy(): Promise<IDataMy> {
    let result: IDataMy = {} as IDataMy
    const datamy = await fetch(`${backendUrl}/datamy`)
      .then((res) => res.json())
      .catch((e) => {
        console.log(e)
        return {} as IDataMy
      })
    if (!datamy.statusCode) {
      result = datamy
    }
    return result
  }

  static async getProducts(): Promise<IProduct[]> {
    let result: IProduct[] = []
    const products = await fetch(`${backendUrl}/products`)
      .then((res) => res.json())
      .catch((e) => {
        console.log(e)
        return [] as IProduct[]
      })
    if (!products.statusCode) {
      result = products
    }
    result.map((product) => {
      const ptr = product
      // @ts-ignore
      ptr.image.url = backendUrl + ptr.image.url
      ptr.hover.url = backendUrl + ptr.hover.url
      product = ptr
      return product
    })
    return result
  }
}
