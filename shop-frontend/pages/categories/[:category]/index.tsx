import CategoryLine, {
  ICategoryPageWrapper,
} from '../../../components/CategoryLine'
import Heading from '../../../hoc/Heading'
import RecomendedProductsSection from '../../../components/RecomendedProductsSection'
import mainServices from '../../../services/main.services'

const CategoryPage = ({
  children,
  categories,
  products,
}: ICategoryPageWrapper) => {
  return (
    <Heading>
      <CategoryLine categories={categories} />
      <RecomendedProductsSection
        products={products}
        isRecomendedProducts={false}
      />
    </Heading>
  )
}

export default CategoryPage

export async function getServerSideProps() {
  const categories = (await mainServices.getCategories()) || []
  const products = (await mainServices.getProducts()) || []
  return {
    props: { categories, products },
  }
}
