import Link from 'next/link'
// import FooterSection from '../components/FooterSection'
import SubscribeSection from '../components/SubscribeSection'
import Logo from '../public/img/LogoShop1.png'

interface IHead {
  children: any
}

const Head = ({ children }: IHead) => {
  const links = [
    { title: 'Главная', link: '/' },
    { title: 'Категории', link: '/categories' },
    // { title: 'Category2', link: '/categories/2' },
    // { title: 'Category3', link: '/categories/3' },
  ]

  return (
    <>
      <div className="main-content-wrapper d-flex clearfix">
        <div className="mobile-nav">
          <div className="amado-navbar-brand">
            <Link href="/">
              <a>
                <img src="../public/img/core-img/LogoShop.jpg" alt="Logo" />
              </a>
            </Link>
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
            <Link href="/">
              <a>
                <img src={Logo.src} alt="Logo" />
              </a>
            </Link>
          </div>
          <nav className="amado-nav">
            <ul>
              {links.map((linking, index) => (
                <li key={'linkCategory' + index}>
                  <Link href={linking.link}>
                    <a>{linking.title}</a>
                  </Link>
                </li>
              ))}
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
        {children}
      </div>
      <SubscribeSection />
      {/* <FooterSection />*/}
    </>
  )
}

export default Head
