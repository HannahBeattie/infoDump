import { Button, ButtonGroup, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'

function Filter({ artc, setFiltered, activeGenre, setActiveGenre, tags }) {
	// console.log('tags are:', tags)
	const eachTag = tags.map((tag: any) => {
		const { slug, name, articles } = tag.attributes
		return {
			slug,
			name,
			articleIds: articles?.data?.map((art: any) => art.id),
		}
	})
	console.log('eachTag is:', eachTag)

	//slug
	// name
	//articles.id

	return <ButtonGroup size={'sm'}></ButtonGroup>
}

export default Filter
