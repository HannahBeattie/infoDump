// import { Button, ButtonGroup, TagLabel, Text } from '@chakra-ui/react'
// import React, { useEffect } from 'react'

// export default function Filter({ artc, setFiltered, activeGenre, setActiveGenre, tags }) {
// 	// console.log('tags are:', tags)
// 	const eachTag = tags.map((tag: any) => {
// 		const { slug, name, articles } = tag.attributes
// 		return {
// 			slug,
// 			name,
// 			articleIds: articles?.data?.map((art: any) => art.id),
// 		}
// 	})

// 	//slug
// 	// name
// 	//articles.id
// 	// console.log('artc is:', artc)
// 	// const eachArt = artc.map((art: any) => {
// 	// 	const { slug, data.name, data.id } = art.attributes
// 	// 	return {
// 	// 		slug,
// 	// 		data.id
// 	// 		data.name,
// 	// 	}
// 	// })

// 	console.log('eachArt is:', eachArt)
// 	useEffect(() => {
// 		if (activeGenre === 0) {
// 			setFiltered(artc)
// 			return
// 		}
// 		// const filtered = artc.filter(art.)
// 	}, [artc, setFiltered, activeGenre])

// 	const tagLabels = eachTag.map((tag: any, id: any) => {
// 		const { name, slug, articleIds } = tag

// 		return (
// 			<Button
// 				textTransform={'uppercase'}
// 				bg={'teal.600'}
// 				px={2}
// 				py={1}
// 				color={'white'}
// 				borderRadius={'md'}
// 				fontWeight={'600'}
// 				key={slug}
// 				onClick={setActiveGenre(1)}
// 			>
// 				{name} {articleIds}
// 			</Button>
// 		)
// 	})
// 	// console.log('tagLabels are:', tagLabels)

// 	return (
// 		<>
// 			<ButtonGroup size={'sm'}>
// 				<Button
// 					textTransform={'uppercase'}
// 					bg={'teal.600'}
// 					px={2}
// 					py={1}
// 					color={'white'}
// 					borderRadius={'md'}
// 					fontWeight={'600'}
// 					onClick={setActiveGenre(0)}
// 				>
// 					all
// 				</Button>

// 				{tagLabels}
// 			</ButtonGroup>
// 		</>
// 	)
// }
