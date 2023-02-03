import { Text, VStack } from '@chakra-ui/react'
import Nav from './Nav'

export default function Layout({ props, children, categories, seo }: any) {
	const stackProps = {
		flex: 1,
		justifyContent: 'stretch',
		alignItems: 'center',
		py: 8,
		spacing: 8,
		...props,
	}
	return (
		<VStack flex={1} alignItems={'stretch'} py={0} spacing={0}>
			<Nav pages={categories} />
			<VStack {...stackProps} py={90} bgGradient='linear(to-b, #d9d9d9, #ffffff,  #fffaed)'>
				{children}
			</VStack>
		</VStack>
	)
}
