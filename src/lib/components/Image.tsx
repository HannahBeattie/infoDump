import { GridItem, Image } from '@chakra-ui/react'
import getStrapiMedia from '../getMedia'

export default function MyImage({ image }: any) {
	const { alternativeText, width, height } = image.data.attributes

	return (
		<Image
			filter='grayscale(100%)'
			borderRadius={'lg'}
			boxShadow={'lg'}
			w={'100%'}
			h={'100%'}
			src={getStrapiMedia(image)}
			alt={alternativeText || ''}
		/>
	)
}
