import Articles from '@/lib/components/Article'
import Layout from '@/lib/components/Layout'
import Seo from '@/lib/components/Seo'
import { Heading, VStack } from '@chakra-ui/react'
import React from 'react'

import { fetchAPI } from '../lib/api'

const Home = ({ articles, categories, homepage }: any) => {
	return (
		<Layout categories={categories}>
			<Seo seo={homepage.attributes.seo} />
			<Heading
				flex={1}
				fontSize={'5xl'}
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
	const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
		fetchAPI('/articles', { populate: ['image', 'category'] }),
		fetchAPI('/categories', { populate: '*' }),
		fetchAPI('/homepage', {
			populate: {
				hero: '*',
				seo: { populate: '*' },
			},
		}),
	])

	return {
		props: {
			articles: articlesRes.data,
			categories: categoriesRes.data,
			homepage: homepageRes.data,
		},
		revalidate: 1,
	}
}

export default Home
