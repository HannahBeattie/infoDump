import { HStack, Spacer, Text, Icon } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import LinkWrapper from './LinkWrapper'
import { GiBrain } from 'react-icons/gi'

export default function Nav({ pages }: any) {
	const router = useRouter()
	const currentRoute = router.pathname
	const [clicked, setClicked] = useState<number | undefined>()
	const navbarProps = {
		bg: 'blackAlpha.900',
		boxShadow: 'xl-dark',
		py: '2',
		px: '4',
		fontSize: 'md',
		spacing: 4,
		color: 'white',
	}

	return (
		<>
			<HStack {...navbarProps} display={{ base: 'none', md: 'flex' }}>
				<LinkWrapper href={'/'}>
					<HStack color={'/' === currentRoute ? 'whiteAlpha.900' : 'whiteAlpha.800'}>
						<Icon
							borderRadius={'200'}
							fontSize='5xl'
							p={1}
							bgGradient='linear(to-l,#006d6d, #006868, #006e9a)'
							fontWeight='extrabold'
							_hover={{ color: 'white' }}
							border={'2px'}
							borderColor={'whiteAlpha.500'}
							as={GiBrain}
							size={'8xl'}
						/>
						<Text
							borderRadius={'200'}
							fontSize='xl'
							p={2}
							bgGradient='linear(to-l,#15fbfb, #5ff3f3, #23c1ff)'
							bgClip='text'
							fontWeight='extrabold'
							// color={'/' === currentRoute ? 'white.400' : 'teal.300'}
							_hover={{ color: 'teal.200' }}
						>
							InfoDump
						</Text>
					</HStack>
				</LinkWrapper>
				<Spacer />
				{pages.map((page: any) => {
					console.log('clicked is', clicked)
					return (
						<LinkWrapper href={`/category/${page.attributes.slug}`} key={page.id}>
							<Text
								onClick={() => setClicked(page.id)}
								textTransform={'uppercase'}
								fontWeight={page.id === clicked ? '600' : '300'}
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
