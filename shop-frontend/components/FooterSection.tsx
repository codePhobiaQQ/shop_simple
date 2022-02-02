import React from 'react'

const FooterSection = () => {
  return (
    <footer className="footer_area clearfix">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <div className="single_widget_area">
              <div className="footer-logo mr-50">
                <a href="index.html">
                  <img src="img/core-img/logo2.png" alt="Logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="single_widget_area">
              <div className="footer_menu">
                <nav className="navbar navbar-expand-lg justify-content-end">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#footerNavContent"
                    aria-controls="footerNavContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="fa fa-bars"></i>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="footerNavContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="shop.html">
                          Shop
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="product-details.html">
                          Product
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="cart.html">
                          Cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="checkout.html">
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
