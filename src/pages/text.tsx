import LinkWrapper from '@/lib/components/LinkWrapper'
import { Heading, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Text() {
	return (
		<VStack flex={1} py={100} bg={'gray.100'}>
			<HStack spacing={4}>
				<LinkWrapper fontWeight={'500'} href={'/text'} color={'gray.800'}></LinkWrapper>
			</HStack>
		</VStack>
	)
}
