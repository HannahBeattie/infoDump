import {
	Link,
	LinkProps,
	StyleProps,
	SystemCSSProperties,
	SystemStyleFunction,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function LinkWrapper({ children, href, ...rest }: LinkProps) {
	const router = useRouter()
	const currentRoute = router.pathname
	const isCurrent = href === currentRoute
	const linkProps = {
		fontWeight: isCurrent ? '300' : '400',
		textDecoration: 'none',
		_hover: { textDecoration: 'none' },
		...rest,
	} as LinkProps

	return (
		<NextLink href={href ?? '/'} passHref legacyBehavior>
			<Link {...linkProps}>{children}</Link>
		</NextLink>
	)
}
