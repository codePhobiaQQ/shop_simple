import CategoryLine, {
  ICategoryPageWrapper,
} from '../../../components/CategoryLine'
import Head from '../../../hoc/Head'
import RecomendedProductsSection from '../../../components/RecomendedProductsSection'

const CategoryPage = ({ children }: ICategoryPageWrapper) => {
  return (
    <Head>
      <CategoryLine />
      <RecomendedProductsSection isRecomendedProducts={false} />
    </Head>
  )
}

export default CategoryPage
