import Heading from '../../hoc/Heading'
import CategoryLine from '../../components/CategoryLine'
import RecomendedProductsSection from '../../components/RecomendedProductsSection'
import mainServices from '../../services/main.services'

const CategoryPage = ({ categories, products }: any) => {
  return (
    <Heading>
      <CategoryLine categories={categories} />
      <RecomendedProductsSection
        products={products}
        isRecomendedProducts={true}
      />
    </Heading>
  )
}

export default CategoryPage

export async function getServerSideProps() {
  const categories = (await mainServices.getCategories()) || []
  const products = (await mainServices.getProducts()) || []
  console.log(products)
  return {
    props: { categories, products },
  }
}
