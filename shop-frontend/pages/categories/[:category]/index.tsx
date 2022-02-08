import CategoryLine, {
  ICategoryPageWrapper,
} from '../../../components/CategoryLine'
import Heading from '../../../hoc/Heading'
import RecomendedProductsSection from '../../../components/RecomendedProductsSection'

const CategoryPage = ({ children }: ICategoryPageWrapper) => {
  return (
    <Heading>
      <CategoryLine />
      <RecomendedProductsSection isRecomendedProducts={false} />
    </Heading>
  )
}

export default CategoryPage
