import DisplayCard from './DisplayCard'

const Articles = ({ articles }: any) => {
	return (
		<>
			{articles.map((article: any, i: any) => {
				return <DisplayCard key={`article${article.attributes.slug}`} article={article} />
			})}
		</>
	)
}

export default Articles
