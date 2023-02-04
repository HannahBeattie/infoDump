import { Grid, SimpleGrid } from '@chakra-ui/react'
import DisplayCard from './DisplayCard'

const Articles = ({ articles, num, p, g }: any) => {
	return (
		<>
			<Grid templateColumns={num ? num : 'repeat(1, 1fr)'} p={p ? p : 4} gap={g ? g : 4}>
				{articles.map((article: any, i: any) => {
					return (
						<DisplayCard key={`article${article.attributes.slug}`} article={article} />
					)
				})}
			</Grid>
		</>
	)
}

export default Articles
