import Articles from '@/lib/components/Article'
import Layout from '@/lib/components/Layout'
import Seo from '@/lib/components/Seo'
import { Heading } from '@chakra-ui/react'
import { fetchAPI } from '../lib/api'

const Home = ({ articles, categories, homepage }: any) => {
	// console.log(`<Home> homepage:`, homepage)
	return (
		<Layout categories={categories}>
			<Seo seo={homepage.attributes.seo} />
			<Heading
				flex={1}
				fontSize={{ base: '4xl', md: '5xl' }}
				fontWeight={'bold'}
				color={'blackAlpha.800'}
				fontFamily={'Montserrat Subrayada'}
			>
				{homepage.attributes.hero.title}
			</Heading>

			<Articles articles={articles} />
		</Layout>
	)
}

export async function getStaticProps() {
	// Run API calls in parallel
	const [articlesRes, categoriesRes, homepageRes, tagsRes] = await Promise.all([
		fetchAPI('/articles', { populate: ['image', 'category', 'tags'] }),
		fetchAPI('/categories', { populate: '*' }),
		fetchAPI('/homepage', {
			populate: {
				hero: '*',
				seo: { populate: '*' },
			},
		}),
		fetchAPI('/tags', { populate: '*' }),
	])

	return {
		props: {
			tags: tagsRes.data,
			articles: articlesRes.data,
			categories: categoriesRes.data,
			homepage: homepageRes.data,
		},
		revalidate: 1,
	}
}

export default Home
