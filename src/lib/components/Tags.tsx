import { Button, HStack } from '@chakra-ui/react'
import React from 'react'

export default function Tags({ itemsTags }: any) {
	let eachTag = itemsTags.map((tag: any) => tag.attributes.name)
	const tagLabels = eachTag.map((tag: string, id: string) => {
		return <Button key={id}> {tag}</Button>
	})
	return <HStack>{tagLabels}</HStack>
}
