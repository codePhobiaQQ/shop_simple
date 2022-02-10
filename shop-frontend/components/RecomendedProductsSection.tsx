import Link from 'next/link'
import { IProduct } from '../services/main.services'

interface IProductsSection {
  isRecomendedProducts: boolean
  products?: IProduct[]
}

const RecomendedProductsSection = ({
  isRecomendedProducts,
  products,
}: IProductsSection) => {
  const productsmy = products || ([] as IProduct[])

  return (
    <div className="amado_product_area section-padding-100">
      <div className="container-fluid">
        {isRecomendedProducts && (
          <h3 className={'mb-50 bold-text'}>Хиты продаж:</h3>
        )}
        <div className="row">
          {productsmy.map((product, index) => (
            <div
              key={'recomendedProduct' + index}
              className="col-12 col-sm-6 col-md-12 col-xl-6 cursor-pointer"
            >
              <Link href={`/categories/${product.category.link}/${product.id}`}>
                <a>
                  <div className="single-product-wrapper">
                    <div className="product-img">
                      <img src={product.image.url} alt="Recomended" />
                      <img
                        className="hover-img"
                        src={product.hover.url}
                        alt="Recomended"
                      />
                    </div>

                    <div className="product-description d-flex align-items-center justify-content-between">
                      <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">₽{product.price}</p>
                        <a href="product-details.html">
                          <h6>{product.name}</h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecomendedProductsSection
