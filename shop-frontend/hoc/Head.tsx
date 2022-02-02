import CategorySection from '../components/CategorySection'
import Link from 'next/link'

interface IHead {
  children: any
}

const Head = ({ children }: IHead) => {
  return (
    <>
      <div className="main-content-wrapper d-flex clearfix">
        <div className="mobile-nav">
          <div className="amado-navbar-brand">
            <a href="index.html">
              <img src="../public/img/core-img/logo.png" alt="" />
            </a>
          </div>
          <div className="amado-navbar-toggler">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <header className="header-area clearfix">
          <div className="nav-close">
            <i className="fa fa-close" aria-hidden="true"></i>
          </div>
          <div className="logo">
            <a href="index.html">
              <img src="img/core-img/logo.png" alt="" />
            </a>
          </div>
          <nav className="amado-nav">
            <ul>
              <li className="active">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Product</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="social-info d-flex mt-50 justify-content-between">
            <a href="#">
              <i className="fa fa-pinterest" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </header>
        <CategorySection />
      </div>
      {children}
    </>
  )
}

export default Head
