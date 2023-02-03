import { Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import LinkWrapper from './LinkWrapper'

export default function DisplayCard({ article }: any) {
	const { slug, tags, category } = article.attributes
	console.log('tags are', tags)
	const { data: tagsData } = tags
	const {
		data: { attributes: categoryData },
	} = category

	console.log('tagsData is', tags.data[0].attributes)

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

						{tags.data.length ? (
							<Text
								fontSize={'sm'}
								color={'teal.400'}
								fontWeight={'bold'}
								textTransform={'uppercase'}
							>
								{tags.data[0].attributes.Tag}
							</Text>
						) : (
							<Text>No tags!</Text>
						)}

						<Heading fontFamily={'Lora'} fontSize={'2xl'}>
							{article.attributes.title}
						</Heading>
						<Text fontSize={'lg'}>{article.attributes.description}</Text>
					</VStack>
				</motion.div>
			</VStack>
		</LinkWrapper>
	)
}
