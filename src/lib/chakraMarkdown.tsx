// via https://raw.githubusercontent.com/mustaphaturhan/chakra-ui-markdown-renderer/master/src/index.tsx
import {
	chakra,
	Code,
	Divider,
	Heading,
	Link,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
	Image,
	Checkbox,
	Table,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark as highlightStyles } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function getCoreProps(props: any) {
	return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {}
}

function UOList(props: any) {
	const { ordered, children, depth } = props
	const attrs = getCoreProps(props)
	let Element = UnorderedList
	let styleType = ['disc', 'circle', 'square'][depth % 3]
	if (ordered) {
		Element = OrderedList
		styleType = ['decimal', 'lower-alpha', 'lower-roman'][depth % 3]
	}
	return (
		<Element spacing={2} as={ordered ? 'ol' : 'ul'} styleType={styleType} pl={4} {...attrs}>
			{children}
		</Element>
	)
}

export const chakraMdComps = {
	p: (props: any) => {
		const { children } = props
		return <Text mb={2}>{children}</Text>
	},
	em: (props: any) => {
		const { children } = props
		return <Text as='em'>{children}</Text>
	},
	blockquote: (props: any) => {
		const { children } = props
		return (
			<Text as='blockquote' pl={3} pt={2} borderLeftWidth={3}>
				{children}
			</Text>
		)
	},
	code: (props: any) => {
		const { inline, children, className } = props
		const match = /language-(\w+)/.exec(className || '')

		if (inline) {
			return (
				<Code py={1} px={1.5}>
					{children}
				</Code>
			)
		}

		return !inline && match ? (
			<SyntaxHighlighter
				style={highlightStyles}
				// customStyle={
				// 	{
				// 		// color: 'white',
				// 		// backgroundColor: 'black',
				// 	}
				// }
				language={match[1]}
				PreTag='div'
				{...props}
			>
				{String(children).replace(/\n$/, '')}
			</SyntaxHighlighter>
		) : (
			<Code className={className} whiteSpace='break-spaces' display='block' w='full' p={2}>
				{children}
			</Code>
		)
	},
	del: (props: any) => {
		const { children } = props
		return <Text as='del'>{children}</Text>
	},
	hr: () => {
		return <Divider />
	},
	a: (props: any) => (
		<Link
			{...props}
			color='blue.400'
			_light={{ color: 'blue.600' }}
			_hover={{ textDecor: 'underline' }}
		/>
	),
	img: Image,
	text: (props: any) => {
		const { children } = props
		return <Text as='span'>{children}</Text>
	},
	ul: UOList,
	ol: UOList,
	li: (props: any) => {
		const { children, node, checked } = props
		let checkbox = null
		if (checked !== null && checked !== undefined) {
			checkbox = (
				<Checkbox isChecked={checked} isReadOnly>
					{node.children[2].value}
				</Checkbox>
			)
		}
		return (
			<ListItem
				{...getCoreProps(props)}
				listStyleType={checked !== null ? 'none' : 'inherit'}
			>
				{checkbox ?? children}
			</ListItem>
		)
	},
	h1: (props: any) => <Heading as='h1' fontSize='4xl' {...props} />,
	h2: (props: any) => <Heading as='h2' fontSize='3xl' {...props} borderBottomWidth={1} pb={2} />,
	h3: (props: any) => <Heading as='h3' fontSize='2xl' {...props} />,
	h4: (props: any) => <Heading as='h4' fontSize='xl' {...props} />,
	h5: (props: any) => <Heading as='h5' fontSize='lg' {...props} />,
	h6: (props: any) => <Heading as='h6' fontSize='lg' {...props} />,
	pre: (props: any) => {
		const { children } = props
		return <chakra.pre {...getCoreProps(props)}>{children}</chakra.pre>
	},
	table: Table,
	thead: Thead,
	tbody: Tbody,
	tr: (props: any) => <Tr>{props.children}</Tr>,
	td: (props: any) => <Td>{props.children}</Td>,
	th: (props: any) => <Th>{props.children}</Th>,
}
