import { HStack, Spacer, Text, Icon, StackProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import LinkWrapper from './LinkWrapper'
import { GiBrain } from 'react-icons/gi'

export default function Nav({ pages }: any) {
	const router = useRouter()
	const currentRoute = router.pathname
	const [clicked, setClicked] = useState<number | undefined>()
	const props = {
		bg: 'whiteAlpha.100',
		boxShadow: 'xl-dark',
		py: '0',
		px: '4',
		fontSize: 'md',
		spacing: 4,
		position: 'fixed',
		width: '100%',
		display: { base: 'none', md: 'flex' },
	} as StackProps

	return (
		<>
			<HStack {...props}>
				<LinkWrapper href={'/'}>
					<HStack>
						<Text
							borderRadius={'200'}
							fontFamily={'Alice'}
							fontSize='xl'
							py={2}
							fontWeight='extrabold'
							color={'MenuText'}
						>
							info-dump
						</Text>
					</HStack>
				</LinkWrapper>

				<Spacer />
				{pages.map((page: any) => {
					return (
						<LinkWrapper href={`/category/${page.attributes.slug}`} key={page.id}>
							<Text
								onClick={() => setClicked(page.id)}
								textTransform={'uppercase'}
								fontWeight={page.id === clicked ? '800' : '600'}
								color={'MenuText'}
								// color={page.id === clicked ? 'gray.300' : 'gray'}
								fontFamily={'sans-serif'}
							>
								{page.attributes.name}
							</Text>
						</LinkWrapper>
					)
				})}
			</HStack>
		</>
	)
}
