import Link from 'next/link'
// import FooterSection from '../components/FooterSection'
import SubscribeSection from '../components/SubscribeSection'
import Logo from '../public/img/LogoShop1.png'
import { useEffect, useState } from 'react'
// @ts-ignore
import Head from 'next/head'
import mainServices, { IDataMy } from '../services/main.services'
import { backendUrl } from '../vars'

interface IHead {
  children: any
}

const Heading = ({ children }: IHead) => {
  const links = [
    { title: 'Главная', link: '/' },
    { title: 'Категории', link: '/categories' },
  ]

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [myData, changeMyData] = useState({
    logo: { url: Logo.src },
    telephone: '+7 (999) 839-76-28',
    email: 'Etoseshop@yandex.ru',
    ip: 'Калугин Руслан Сергеевич',
    ogrn: '322774600080630',
    inn: '644008830108',
    instagram: 'https://www.instagram.com/etoseshop/',
    vk: 'https://m.vk.com/club210602942',
    tiktok: 'https://tiktok.com/@etoseshop',
  } as IDataMy)
  const clickHandler = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await mainServices.getDataMy()
      result.logo.url = backendUrl + result.logo.url
      changeMyData(result)
    }
    fetchData()
  }, [])

  return (
    <>
      <Head>
        <title>E-Tose</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="main-content-wrapper d-flex clearfix">
        <div className="mobile-nav">
          <div className="amado-navbar-brand">
            <Link href="/">
              <a>
                <img src={myData.logo.url} alt="Logo" />
              </a>
            </Link>
          </div>
          <div className="amado-navbar-toggler" onClick={() => clickHandler()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <header
          className={
            isMenuOpen
              ? 'header-area clearfix bp-xs-on'
              : 'header-area clearfix'
          }
        >
          <div className="nav-close" onClick={() => clickHandler()}>
            <i className="fa fa-close" aria-hidden="true"></i>
          </div>
          <div className="logo">
            <Link href="/">
              <a>
                <img src={myData.logo.url} alt="Logo" />
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
            <a href={myData.instagram} target="_blank" rel="noreferrer">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href={myData.vk} target="_blank" rel="noreferrer">
              <i className="fa fa-vk" aria-hidden="true"></i>
            </a>
            <a href={myData.tiktok} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 32 32"
              >
                <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z" />
              </svg>
            </a>
          </div>
          <div className="infoCustom mt-50">
            <div className="connect">
              <span>Связаться с нами:</span>
              <a className={'d-block mt-1'} href={`tel:${myData.telephone}`}>
                {myData.telephone}
              </a>
            </div>
            <div className="connect mt-50">
              <span>E-mail:</span>
              <a className={'d-block mt-1'} href={`mailto:${myData.email}`}>
                {myData.email}
              </a>
            </div>
            <div className="connect mt-50">
              <span>ИП </span>
              <span className={'d-block mt-1'}>{myData.ip}</span>
            </div>
            <div className="connect mt-50">
              <span>ОГРН:</span>
              <span className={'d-block mt-1'}>{myData.ogrn}</span>
            </div>
            <div className="connect mt-50">
              <span>ИНН:</span>
              <span className={'d-block mt-1'}>{myData.inn}</span>
            </div>
          </div>
        </header>
        {children}
      </div>
      <SubscribeSection />
      {/* <FooterSection />*/}
    </>
  )
}

export default Heading
