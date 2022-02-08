import Link from 'next/link'

interface IProductsSection {
  isRecomendedProducts: boolean
}

const RecomendedProductsSection = ({
  isRecomendedProducts,
}: IProductsSection) => {
  const products = [
    {
      title: 'Чехол Черный IPhone',
      price: 10,
      id: 1,
      category: 'chair',
      imgFirst: 'img/cover.jpeg',
      imgHover: 'img/cover_back.jpeg',
    },
    {
      title: 'Чехол Черный IPhone',
      price: 150,
      id: 2,
      category: 'chair',
      imgFirst: 'img/cover.jpeg',
      imgHover: 'img/cover_back.jpeg',
    },
    {
      title: 'Чехол Черный IPhone',
      price: 150,
      id: 3,
      category: 'chair',
      imgFirst: 'img/cover.jpeg',
      imgHover: 'img/cover_back.jpeg',
    },
    {
      title: 'Чехол Черный IPhone',
      price: 150,
      id: 4,
      category: 'chair',
      imgFirst: 'img/cover.jpeg',
      imgHover: 'img/cover_back.jpeg',
    },
    {
      title: 'Чехол Черный IPhone',
      price: 150,
      id: 5,
      category: 'chair',
      imgFirst: 'img/cover.jpeg',
      imgHover: 'img/cover_back.jpeg',
    },
    {
      title: 'Чехол Черный IPhone',
      price: 150,
      id: 6,
      category: 'chair',
      imgFirst: 'img/cover.jpeg',
      imgHover: 'img/cover_back.jpeg',
    },
  ]

  return (
    <div className="amado_product_area section-padding-100">
      <div className="container-fluid">
        {isRecomendedProducts && (
          <h3 className={'mb-50 bold-text'}>Хиты продаж:</h3>
        )}
        <div className="row">
          {products.map((product, index) => (
            <div
              key={'recomendedProduct' + index}
              className="col-12 col-sm-6 col-md-12 col-xl-6 cursor-pointer"
            >
              <Link href={`/categories/${product.category}/${product.id}`}>
                <a>
                  <div className="single-product-wrapper">
                    <div className="product-img">
                      <img src={product.imgFirst} alt="Recomended" />
                      <img
                        className="hover-img"
                        src={product.imgHover}
                        alt="Recomended"
                      />
                    </div>

                    <div className="product-description d-flex align-items-center justify-content-between">
                      <div className="product-meta-data">
                        <div className="line"></div>
                        <p className="product-price">₽{product.price}</p>
                        <a href="product-details.html">
                          <h6>{product.title}</h6>
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
