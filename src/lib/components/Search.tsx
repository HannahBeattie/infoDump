import { Input, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

export default function Search() {
	const [value, setValue] = useState('')
	const handleChange = (event: any) => setValue(event.target.value)

	return (
		<>
			<VStack px={100}>
				<Text mb='8px'>Value: {value}</Text>
				<Input
					bg={'white'}
					value={value}
					onChange={handleChange}
					placeholder='hello'
					size='sm'
				/>
			</VStack>
		</>
	)
}
