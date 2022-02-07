import Link from 'next/link'

interface ICategoryPageWrapper {
  children?: any
}

interface ICategory {
  title: string
  link: string
}

const CategoryPageWrapper = ({ children }: ICategoryPageWrapper) => {
  const categories: ICategory[] = [
    {
      title: 'Защитные стекла',
      link: '/categories/chair',
    },
    {
      title: 'Чехлы',
      link: '/categories/beds',
    },
    {
      title: 'Ремешки',
      link: '/categories/accesories',
    },
  ]

  return (
    <div className="shop_sidebar_area">
      <div className="widget catagory mb-50">
        <h6 className="widget-title mb-30">Категории:</h6>

        <div className="catagories-menu">
          <ul>
            {categories.map((categori, index) => (
              <li key={'linkToCategory' + index}>
                <Link href={categori?.link}>
                  <a>{categori?.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CategoryPageWrapper
