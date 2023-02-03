import { getStrapiURL } from './api'

export default function getStrapiMedia(media: any) {
	const { url } = media?.data?.attributes ? media?.data?.attributes : ''
	const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url

	return imageUrl
}
