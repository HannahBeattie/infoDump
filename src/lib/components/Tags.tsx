import { Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Tags({ itemsTags }: any) {
	let eachTag = itemsTags.map((tag: any) => tag.attributes.name)
	const tagLabels = eachTag.map((tag: string, id: string) => {
		return (
			<Text
				textTransform={'uppercase'}
				bg={'teal.600'}
				px={2}
				py={1}
				color={'white'}
				borderRadius={'md'}
				fontWeight={'600'}
				key={id}
			>
				{' '}
				{tag}
			</Text>
		)
	})
	return <HStack>{tagLabels}</HStack>
}
