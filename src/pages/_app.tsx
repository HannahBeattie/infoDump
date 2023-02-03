import { fetchAPI } from '@/lib/api'
import Footer from '@/lib/components/Footer'
import getStrapiMedia from '@/lib/getMedia'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import App from 'next/app'
import Head from 'next/head'
import { createContext } from 'react'
import '../styles/globals.css'

// Store Strapi Global object in context
type GlobalCtx = {
	defaultSeo: object
	siteName: string
}

export const GlobalContext = createContext<GlobalCtx>({ defaultSeo: {}, siteName: '' })

const MyApp = ({ Component, pageProps }: any) => {
	const { global } = pageProps

	return (
		<>
			<Head>
				<link rel='shortcut icon' href={getStrapiMedia(global.attributes.favicon)} />
			</Head>
			<ChakraProvider>
				<GlobalContext.Provider value={global.attributes}>
					<VStack
						flex={1}
						color={'black'}
						bgGradient={'linear(to-r, #030303.200#333333nk.500)'}
						alignItems={'stretch'}
						minH={'100vh'}
						spacing={0}
						py={0}
					>
						<Component {...pageProps} />
						<Footer />
					</VStack>
				</GlobalContext.Provider>
			</ChakraProvider>
		</>
	)
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
	// Calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(ctx)
	// Fetch global site settings from Strapi
	const globalRes = await fetchAPI('/global', {
		populate: {
			favicon: '*',
			defaultSeo: {
				populate: '*',
			},
		},
	})
	// Pass the data to our page via props
	return { ...appProps, pageProps: { global: globalRes.data } }
}

export default MyApp
