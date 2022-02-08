import Link from 'next/link'
import { useRouter } from 'next/router'

export interface ICategoryPageWrapper {
  children?: any
}

export interface ICategory {
  title: string
  link: string
}

const CategoryLine = ({ children }: ICategoryPageWrapper) => {
  const categories: ICategory[] = [
    {
      title: 'Защитные стекла',
      link: 'glasses',
    },
    {
      title: 'Чехлы',
      link: 'covers',
    },
    {
      title: 'Ремешки',
      link: 'remeshki',
    },
  ]

  const route = useRouter()
  const activeCategory = route.asPath.split('categories/')[1]

  return (
    <div className="shop_sidebar_area">
      <div className="widget catagory">
        <h6 className="widget-title mb-30">Категории:</h6>

        <div className="catagories-menu">
          <ul>
            {categories.map((category, index) => (
              <li
                className={category.link == activeCategory ? 'active' : ''}
                key={'linkToCategory' + index}
              >
                <Link href={`/categories/${category.link}`}>
                  <a>{category?.title}</a>
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
