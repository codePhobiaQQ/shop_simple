import Heading from '../hoc/Heading'
import CategoryMainPageSection from '../components/CategoryMainPageSection'
import mainServices from '../services/main.services'

export default function Home({ categories }: any) {
  return (
    <Heading>
      <CategoryMainPageSection categories={categories} />
    </Heading>
  )
}

export async function getServerSideProps() {
  const categories = (await mainServices.getCategories()) || []
  return {
    props: { categories },
  }
}
