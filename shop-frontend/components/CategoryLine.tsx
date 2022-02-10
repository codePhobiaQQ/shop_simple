import Link from 'next/link'
import { useRouter } from 'next/router'
import { ICategories, IProduct } from '../services/main.services'

export interface ICategoryPageWrapper {
  children?: any
  categories?: ICategories[]
  products?: IProduct[]
}

export interface ICategory {
  title: string
  link: string
}

const CategoryLine = ({ children, categories }: ICategoryPageWrapper) => {
  const categoriesmy = categories || ([] as ICategories[])
  const route = useRouter()
  const activeCategory = route.asPath.split('categories/')[1]

  return (
    <div className="shop_sidebar_area">
      <div className="widget catagory">
        <h6 className="widget-title mb-30">Категории:</h6>

        <div className="catagories-menu">
          <ul>
            {categoriesmy.map((category, index) => (
              <li
                className={category.link == activeCategory ? 'active' : ''}
                key={'linkToCategory' + index}
              >
                <Link href={`/categories/${category.link}`}>
                  <a>{category.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoryLine
