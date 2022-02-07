const CategorySection = () => {
  const categories = [{}, {}, {}, {}, {}, {}]

  return (
    <div className="products-catagories-area clearfix">
      <div className="amado-pro-catagory clearfix">
        {categories.map((categori, index) => (
          <div
            key={'categories' + index}
            className="single-products-catagory clearfix"
          >
            <a href="shop.html">
              <img src="img/bg-img/1.jpg" alt="" />
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategorySection
