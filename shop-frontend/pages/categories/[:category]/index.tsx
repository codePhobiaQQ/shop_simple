import Link from 'next/link'
import Head from '../../../hoc/Head'

const CategoryPage = ({ children }: ICategoryPageWrapper) => {
  const categories: ICategory[] = [
    {
      title: 'Защитные стекла',
      link: '/categories/chair',
    },
    // {
    //   title: 'Защитные стекла',
    //   link: '/categories/chair',
    // },
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
    <Head>
      <div className="shop_sidebar_area">
        <div className="widget catagory mb-50">
          <h6 className="widget-title mb-30">Категории:</h6>
          <div className="catagories-menu">
            <ul>
              {categories.map((category, index) => (
                <li key={'linkToCategory' + index}>
                  <Link href={category?.link}>
                    <a>{category?.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Head>
  )
}

export default CategoryPage
