import Heading from '../../hoc/Heading'
import CategoryLine from '../../components/CategoryLine'
import RecomendedProductsSection from '../../components/RecomendedProductsSection'

const Index = () => {
  return (
    <Heading>
      <CategoryLine />
      <RecomendedProductsSection isRecomendedProducts={true} />
    </Heading>
  )
}

export default Index
