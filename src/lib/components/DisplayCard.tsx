import { Heading, Text, VStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import LinkWrapper from './LinkWrapper'

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
				borderColor={'whiteAlpha.500'}
				borderBottomColor={'whiteAlpha.700'}
				borderRightColor={'whiteAlpha.800'}
				bg={'blackAlpha.900'}
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
							color={'red.400'}
							fontWeight={'bold'}
							textTransform={'uppercase'}
						>
							{article.attributes.category.data.attributes.name}
						</Text>
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
