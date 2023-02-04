import { chakraMdComps } from '@/lib/chakraMarkdown'
import Layout from '@/lib/components/Layout'
import Seo from '@/lib/components/Seo'
import Tags from '@/lib/components/Tags'
import getStrapiMedia from '@/lib/getMedia'
import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
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
	const itemsTags = tags.data

	return (
		<Layout categories={categories.data}>
			<VStack spacing={8} flex={1}>
				<Heading>{title}</Heading>
				<HStack>
					{tags.data.length ? <Tags itemsTags={itemsTags} /> : <Text>No tags!</Text>}
				</HStack>
				<Container>
					<Text color={'CaptionText'}> {description}</Text>
				</Container>
			</VStack>
			<Seo seo={seo} />
			{imageUrl && <Image src={imageUrl} maxW={'600'} borderRadius={'lg'} alt={''}></Image>}

			<VStack borderRadius={'lg'} boxShadow={'lg'} alignItems='stretch'>
				<ReactMarkdown components={chakraMdComps}>{content}</ReactMarkdown>

				{/* <Moment format='MMM Do YYYY'>{article.attributes.published_at}</Moment> */}
			</VStack>

			<Text>by {author.data.attributes.name}</Text>

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
