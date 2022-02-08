import Link from 'next/link'

const CategoryMainPageSection = () => {
  const categories = [{}, {}, {}, {}, {}, {}]

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
                <img src="img/cover.jpeg" alt="cover" />
                <div className="hover-content">
                  <div className="line"></div>
                  <p>От ₽150</p>
                  <h4>Чехол Черный IPhone</h4>
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
