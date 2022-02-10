import Link from 'next/link'
import { ICategories } from '../services/main.services'
import { backendUrl } from '../vars'

interface ICategoryMainPageSection {
  categories: ICategories[]
}

const CategoryMainPageSection = ({ categories }: ICategoryMainPageSection) => {
  return (
    <div className="products-catagories-area clearfix">
      <div className="amado-pro-catagory clearfix">
        {categories.map((categori, index) => (
          <div
            key={'categories' + index}
            className="single-products-catagory clearfix"
          >
            <Link href="/categories">
              <a>
                <img src={backendUrl + categori.image.url} alt="cover" />
                <div className="hover-content">
                  <div className="line"></div>
                  <p>От ₽{categori.price}</p>
                  <h4>{categori.name}</h4>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryMainPageSection
