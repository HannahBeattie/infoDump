import { Card, Grid, GridItem, Heading, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import MyImage from './Image'
import LinkWrapper from './LinkWrapper'
import { motion, Reorder } from 'framer-motion'

export default function DisplayCard({ article }: any) {
	return (
		<LinkWrapper href={`/article/${article.attributes.slug}`}>
			<VStack
				p={8}
				color={'white'}
				outlineColor={'teal.900'}
				border={'1px'}
				borderBottom={'4px'}
				borderRight={'4px'}
				borderColor={'cyan'}
				borderBottomColor={'teal.600'}
				borderRightColor={'teal.800'}
				bg={'blackAlpha.600'}
				flex={1}
				alignItems={'stretch'}
				width={600}
				height={200}
				borderRadius={'xl'}
				boxShadow={'xl'}
			>
				<motion.div>
					<VStack alignItems={'stretch'}>
						<Text
							fontSize={'sm'}
							color={'teal'}
							fontWeight={'bold'}
							textTransform={'uppercase'}
						>
							{article.attributes.category.data.attributes.name}
						</Text>
						<Heading fontSize={'2xl'}>{article.attributes.title}</Heading>
						<Text fontSize={'lg'}>{article.attributes.description}</Text>
					</VStack>
				</motion.div>
			</VStack>
		</LinkWrapper>
	)
}
