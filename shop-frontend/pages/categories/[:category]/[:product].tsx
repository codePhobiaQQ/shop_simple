import Link from 'next/link'
import Head from '../../../hoc/Head'
import image from '../../../public/img/cover.jpeg'

const ProductCart = () => {
  return (
    <Head>
      <div className="single-product-area section-padding-100 clearfix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-50">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Главная</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/categories">
                      <a>Категории</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/categories/covers">
                      <a>Чехлы</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Чехол Черный IPhone
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="single_product_thumb">
                <div
                  id="product_details_slider"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-target="#product_details_slider"
                      data-slide-to="0"
                      // style="background-image: url(img/product-img/pro-big-1.jpg);"
                    ></li>
                    <li
                      data-target="#product_details_slider"
                      data-slide-to="1"
                      // style="background-image: url(img/product-img/pro-big-2.jpg);"
                    ></li>
                    <li
                      data-target="#product_details_slider"
                      data-slide-to="2"
                      // style="background-image: url(img/product-img/pro-big-3.jpg);"
                    ></li>
                    <li
                      data-target="#product_details_slider"
                      data-slide-to="3"
                      style={{ backgroundImage: `url(${image.src});` }}
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src={image.src}
                        alt="First slide"
                      />
                    </div>
                    <div className="carousel-item">
                      <a
                        className="gallery_img"
                        href="img/product-img/pro-big-2.jpg"
                      >
                        <img
                          className="d-block w-100"
                          src="img/product-img/pro-big-2.jpg"
                          alt="Second slide"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a
                        className="gallery_img"
                        href="img/product-img/pro-big-3.jpg"
                      >
                        <img
                          className="d-block w-100"
                          src="img/product-img/pro-big-3.jpg"
                          alt="Third slide"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a
                        className="gallery_img"
                        href="img/product-img/pro-big-4.jpg"
                      >
                        <img
                          className="d-block w-100"
                          src="img/product-img/pro-big-4.jpg"
                          alt="Fourth slide"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="single_product_desc">
                <div className="product-meta-data">
                  <div className="line"></div>
                  <p className="product-price">₽150</p>
                  <h6>Чехол Черный IPhone</h6>
                  <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                    {/* <div className="ratings">*/}
                    {/*  <i className="fa fa-star" aria-hidden="true"></i>*/}
                    {/*  <i className="fa fa-star" aria-hidden="true"></i>*/}
                    {/*  <i className="fa fa-star" aria-hidden="true"></i>*/}
                    {/*  <i className="fa fa-star" aria-hidden="true"></i>*/}
                    {/*  <i className="fa fa-star" aria-hidden="true"></i>*/}
                    {/* </div>*/}
                  </div>
                  <p className="avaibility">
                    <i className="fa fa-circle"></i> В Наличии
                  </p>
                </div>

                <div className="short_overview my-5">
                  <p>
                    Матовые накладки INNOVATION – стильный и надежный способ
                    защитить ваш телефон от царапин и пыли. Накладки изготовлены
                    из высококачественного силикона, матовое покрытие приятно на
                    ощупь и не скользит в руке. Накладки представлены в самом
                    универсальном черном цвете, который подойдет широкой группе
                    покупателей.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Head>
  )
}

export default ProductCart
