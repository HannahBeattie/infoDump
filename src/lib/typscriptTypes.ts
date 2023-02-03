export type TagType = {
	attributes: {
		Tag: string
		createdAt: string
		publishedAt: string
		slug: string
		updatedAt: string
	}
	id: number
}

export type Article = {
	attributes: {
		slug: string
		tags: {
			data: TagType[]
		}
		// category: {
		// 	data: CategoryType
		// }
	}
}
