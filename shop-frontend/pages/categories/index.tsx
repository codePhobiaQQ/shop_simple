import Head from '../../hoc/Head'
import CategoryPageWrapper from '../../components/CategoryPageWrapper'
import RecomendedProductsSection from '../../components/RecomendedProductsSection'

const Index = () => {
  return (
    <Head>
      <CategoryPageWrapper />
      <RecomendedProductsSection isRecomendedProducts={true} />
    </Head>
  )
}

export default Index
