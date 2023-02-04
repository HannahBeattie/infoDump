import { Text, VStack } from '@chakra-ui/react'
import Nav from './Nav'
import SubNav from './SubNav'

export default function Layout({ props, children, categories, seo }: any) {
	const stackProps = {
		flex: 1,

		py: '8',
		...props,
	}

	return (
		<VStack flex={1} alignItems={'stretch'} py={0} spacing={0} color={'InfoText'}>
			<Nav pages={categories} />
			{/* <SubNav pages={tags} /> */}
			<VStack {...stackProps} display={'flex'}>
				{children}
			</VStack>
		</VStack>
	)
}
