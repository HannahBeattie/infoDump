import Articles from '@/lib/components/Article'
import Filter from '@/lib/components/Filter'
import Layout from '@/lib/components/Layout'
import Seo from '@/lib/components/Seo'
import {
	Heading,
	Container,
	Text,
	VStack,
	Image,
	Grid,
	SimpleGrid,
	HStack,
	Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import { fetchAPI } from '../lib/api'

export default function Tags({ articles, categories, tags }: any) {
	const [artc, setAetc] = useState(articles)
	const [filtered, setFiltered] = useState(articles)
	const [activeGenre, setActiveGenre] = useState(0)

	// console.log('artc is:', artc)
	// console.log('tags are:', tags)
	// let eachTag = tags.map((tag: any) => tag.attributes.name)
	// const tagLabels = eachTag.map((tag: string, id: string) => {
	// 	return (
	// 		<Button
	// 			textTransform={'uppercase'}
	// 			bg={'teal.600'}
	// 			px={2}
	// 			py={1}
	// 			color={'white'}
	// 			borderRadius={'md'}
	// 			fontWeight={'600'}
	// 			key={id}
	// 		>
	// 			{' '}
	// 			{tag}
	// 		</Button>
	// 	)
	// })

	return (
		<Layout categories={categories}>
			<Filter
				tags={tags}
				// tagLabels={tagLabels}
				artc={artc}
				setFiltered={setFiltered}
				activeGenre={activeGenre}
				setActiveGenre={setActiveGenre}
			/>
			<VStack px={10}>
				<Articles articles={artc} num={'repeat(2, 1fr)'} p={8} g={8} />
			</VStack>
		</Layout>
	)
}

export async function getStaticProps() {
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
