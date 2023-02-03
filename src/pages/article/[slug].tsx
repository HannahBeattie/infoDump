import { chakraMdComps } from '@/lib/chakraMarkdown'
import Layout from '@/lib/components/Layout'
import Seo from '@/lib/components/Seo'
import getStrapiMedia from '@/lib/getMedia'
import {
	Button,
	ButtonGroup,
	Heading,
	HStack,
	Image,
	TagLabel,
	Text,
	VStack,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import { fetchAPI } from '../../lib/api'

const Article = ({ article, categories }: any) => {
	const imageUrl = getStrapiMedia(article?.attributes?.image)

	const seo = {
		metaTitle: article.attributes.title,
		metaDescription: article.attributes.description,
		shareImage: article.attributes.image,
		article: true,
	}

	const { description, tags, content, author, title } = article.attributes

	const itemsTags = article.attributes.tags.data
	let eachTag = itemsTags.map((tag: any) => tag.attributes.name)
	const tagLabels = eachTag.map((tag: string, id: string) => {
		return <Button key={id}> {tag}</Button>
	})

	return (
		<Layout categories={categories.data}>
			<VStack spacing={4} color={'gray.900'}>
				<Heading>{title}</Heading>

				<Text fontWeight={'bold'}> {description}</Text>
			</VStack>
			<Seo seo={seo} />
			{imageUrl && <Image src={imageUrl} maxW={'600'} borderRadius={'lg'} alt={''}></Image>}
			<VStack px={300} alignItems='stretch'>
				<VStack p={8} borderRadius={'lg'} boxShadow={'lg'} px={8} alignItems='stretch'>
					<ReactMarkdown components={chakraMdComps}>{content}</ReactMarkdown>

					{/* <Moment format='MMM Do YYYY'>{article.attributes.published_at}</Moment> */}
				</VStack>
			</VStack>
			<Text color={'black'}>by {author.data.attributes.name}</Text>
			<HStack>
				{tags.data.length ? <ButtonGroup>{tagLabels}</ButtonGroup> : <Text>No tags!</Text>}
			</HStack>

			{/* <div>
							{article.attributes.author.data.attributes.picture && (
								<Image
									src={getStrapiMedia(
										article.attributes.author.data.attributes.picture
									)}
									alt={
										article.attributes.author.data.attributes.picture.data
											.attributes.alternativeText
									}
								/>
							)}
						</div> */}
		</Layout>
	)
}

export async function getStaticPaths() {
	const articlesRes = await fetchAPI('/articles', { fields: ['slug'] })

	return {
		paths: articlesRes.data.map((article: any) => ({
			params: {
				slug: article.attributes.slug,
			},
		})),
		fallback: false,
	}
}

export async function getStaticProps({ params }: any) {
	const articlesRes = await fetchAPI('/articles', {
		filters: {
			slug: params.slug,
		},
		populate: ['image', 'category', 'author.picture', 'tags'],
	})

	const categoriesRes = await fetchAPI('/categories')

	return {
		props: { article: articlesRes.data[0], categories: categoriesRes },
		revalidate: 1,
	}
}

export default Article
