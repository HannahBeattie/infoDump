import {
	Box,
	Button,
	ButtonGroup,
	Grid,
	GridItem,
	Heading,
	HStack,
	Text,
	VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { fetchAPI } from '../api'
import LinkWrapper from './LinkWrapper'
import Tags from './Tags'

export default function DisplayCard({ article }: any) {
	// console.log('articled:', article.attributes.tags)
	const { slug, tags, category } = article.attributes
	// console.log('tags..data.attributes.name are', tags.data[0].attributes.name)

	const {
		data: { attributes: categoryData },
	} = category

	const itemsTags = tags.data

	return (
		<Grid>
			<GridItem w={{ md: '80vw' }}>
				<LinkWrapper href={`/article/${slug}`} width={'100%'} height={'100%'}>
					<VStack
						p={8}
						spacing={4}
						outlineColor={'teal.900'}
						border={'1px'}
						borderBottom={'4px'}
						borderRight={'4px'}
						borderColor={'whiteAlpha.500'}
						borderBottomColor={'whiteAlpha.700'}
						borderRightColor={'whiteAlpha.800'}
						bg={'blackAlpha.900'}
						flex={1}
						color={'white'}
						alignItems={'stretch'}
						borderRadius={'xl'}
						boxShadow={'xl'}
					>
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
						<HStack>
							<Text fontWeight={'800'}>May contain:</Text>
							{tags.data.length ? (
								<Tags itemsTags={itemsTags} />
							) : (
								<Text>No tags!</Text>
							)}
						</HStack>
					</VStack>
				</LinkWrapper>
			</GridItem>
		</Grid>
	)
}
