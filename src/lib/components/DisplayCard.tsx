import { Box, Button, ButtonGroup, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { fetchAPI } from '../api'
import LinkWrapper from './LinkWrapper'

export default function DisplayCard({ article }: any) {
	// console.log('articled:', article.attributes.tags)
	const { slug, tags, category } = article.attributes
	// console.log('tags..data.attributes.name are', tags.data[0].attributes.name)
	const { data: tagsData } = tags
	const {
		data: { attributes: categoryData },
	} = category

	const itemsTags = article.attributes.tags.data

	let eachTag = itemsTags.map((tag) => tag.attributes.name)
	console.log('eachTag is:', eachTag)

	// console.log('items tags', itemsTags)

	const tagLabels = eachTag.map((tag: string, id: string) => {
		return <Button key={id}> {tag}</Button>
	})

	return (
		<LinkWrapper href={`/article/${slug}`}>
			<VStack
				p={8}
				color={'white'}
				outlineColor={'teal.900'}
				border={'1px'}
				borderBottom={'4px'}
				borderRight={'4px'}
				borderColor={'whiteAlpha.500'}
				borderBottomColor={'whiteAlpha.700'}
				borderRightColor={'whiteAlpha.800'}
				bg={'blackAlpha.900'}
				flex={1}
				alignItems={'stretch'}
				width={{ md: 600 }}
				height={{ md: 200 }}
				borderRadius={'xl'}
				boxShadow={'xl'}
			>
				<motion.div>
					<VStack alignItems={'stretch'}>
						<Text
							fontSize={'sm'}
							color={'red.400'}
							fontWeight={'bold'}
							textTransform={'uppercase'}
						>
							{categoryData.name}
						</Text>

						<Heading fontFamily={'Lora'} fontSize={'2xl'}>
							{article.attributes.title}
						</Heading>
						<Text fontSize={'lg'}>{article.attributes.description}</Text>
					</VStack>
				</motion.div>
			</VStack>

			<HStack py={4}>
				{tags.data.length ? <ButtonGroup>{tagLabels}</ButtonGroup> : <Text>No tags!</Text>}
			</HStack>
		</LinkWrapper>
	)
}
