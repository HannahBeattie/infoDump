import Articles from '@/lib/components/Article'
import Layout from '@/lib/components/Layout'
import Seo from '@/lib/components/Seo'
import { Heading, Container, Text, VStack, Image } from '@chakra-ui/react'
import { fetchAPI } from '../lib/api'

export default function Home({ articles, categories, homepage }: any) {
	return (
		<Layout categories={categories}>
			<Seo seo={homepage.attributes.seo} />
			<Heading
				flex={1}
				fontSize={{ base: '4xl', md: '5xl' }}
				fontWeight={'bold'}
				fontFamily={'Montserrat Subrayada'}
			>
				{homepage.attributes.hero.title}
			</Heading>
			{/* <Search /> */}
			<Image maxH={'400'} src={'/bean.png'} alt={'A bean-like character'} />
			<Container>
				<VStack>
					<Text fontWeight={'800'}>Bits of code to remember.</Text>
				</VStack>
			</Container>
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
