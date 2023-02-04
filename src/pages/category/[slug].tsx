import Articles from '@/lib/components/Article'
import Layout from '@/lib/components/Layout'
import Seo from '@/lib/components/Seo'
import { Heading } from '@chakra-ui/react'
import { fetchAPI } from '../../lib/api'

const Category = ({ category, categories }: any) => {
	const seo = {
		metaTitle: category.attributes.name,
		metaDescription: `All ${category.attributes.name} articles`,
	}
	console.log('carogory is', category)

	return (
		<Layout categories={categories.data}>
			<Seo seo={seo} />
			<Heading fontSize={'5xl'} fontWeight={'bold'} fontFamily={'Montserrat Subrayada'}>
				{' '}
				{category.attributes.name}
			</Heading>
			<Articles articles={category.attributes.articles.data} />
		</Layout>
	)
}

export async function getStaticPaths() {
	const categoriesRes = await fetchAPI('/categories', { fields: ['slug'] })

	return {
		paths: categoriesRes.data.map((category: any) => ({
			params: {
				slug: category.attributes.slug,
			},
		})),
		fallback: false,
	}
}

export async function getStaticProps({ params }: any) {
	const matchingCategories = await fetchAPI('/categories', {
		filters: { slug: params.slug },
		populate: {
			articles: {
				populate: '*',
			},
		},
	})
	const allCategories = await fetchAPI('/categories')

	return {
		props: {
			category: matchingCategories.data[0],
			categories: allCategories,
		},
		revalidate: 1,
	}
}

export default Category
