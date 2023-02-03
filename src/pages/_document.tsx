import { VStack } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<VStack
				as={'body'}
				minH={'100vh'}
				alignItems={'stretch'}
				flex={1}
				spacing={0}
				padding={0}
				// bg={'#110e1a'}
				color={'white'}
			>
				<Main />
				<NextScript />
			</VStack>
		</Html>
	)
}
