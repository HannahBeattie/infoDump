import { fetchAPI, getStrapiURL } from '@/lib/api'
import { Heading, VStack } from '@chakra-ui/react'

type TagType = {
	attributes: {
		Tag: string
		createdAt: string
		publishedAt: string
		slug: string
		updatedAt: string
	}
	id: number
}

const id = 1
export async function fetchTagsById(id: number) {
	const result = await fetchAPI(`/tags/${id}`)
	console.log('result is:', result)
	return result
}

export async function fetchAllTags() {
	const tags = await fetchAPI(`/tags`)
	console.log('tags.data is:', tags.data)
	return tags.data as TagType[]
}

export default function Text() {
	return (
		<VStack flex={1} bg={'gray.100'}>
			<Heading>Hello</Heading>
			{/* {tags.map((tag, idx) => (
				<Text key={`tag-${idx}`}>{JSON.stringify(tag, null, '    ')}</Text>
			))} */}
		</VStack>
	)
}
