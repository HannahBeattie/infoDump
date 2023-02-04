import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import LinkWrapper from './LinkWrapper'

function SubNav({ pages }) {
	return (
		<HStack bg={'gray.600'}>
			{pages.map((page: any) => {
				return (
					<LinkWrapper href={`/category/${page.attributes.slug}`} key={page.id}>
						<Text
							textTransform={'uppercase'}
							color={'highlight'}
							fontFamily={'sans-serif'}
						>
							{page.attributes.name}
						</Text>
					</LinkWrapper>
				)
			})}
		</HStack>
	)
}

export default SubNav
