import { Divider, HStack, VStack } from '@chakra-ui/react'
import React from 'react'

function Footer() {
	return (
		<VStack alignItems={'stretch'} spacing={0} boxShadow={'dark-lg'}>
			<Divider />
			<HStack py={4} px={4} flex={1} bg={'blackAlpha.900'}></HStack>
		</VStack>
	)
}

export default Footer
