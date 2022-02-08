import Head from '../../hoc/Head'
import CategoryLine from '../../components/CategoryLine'
import RecomendedProductsSection from '../../components/RecomendedProductsSection'

const Index = () => {
  return (
    <Head>
      <CategoryLine />
      <RecomendedProductsSection isRecomendedProducts={true} />
    </Head>
  )
}

export default Index
