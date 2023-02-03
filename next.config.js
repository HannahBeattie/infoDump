/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

module.exports = {
	nextConfig,
	reactStrictMode: true,
	images: {
		loader: 'default',
		domains: ['localhost'],
	},
}
