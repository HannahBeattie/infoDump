import { Button, ButtonProps, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'

export default function ToggleColorMode(props: ButtonProps) {
	{
		const { toggleColorMode } = useColorMode()
		const mode = useColorModeValue(<BsLightbulb />, <BsLightbulbOff />)
		const buttonStyles = {
			top: '12',
			bg: '',
			_hover: { bg: '' }, //addHoverStyles here
			_active: { bg: '0' },
			fontSize: 'xl',
			_light: { color: 'black' },
			_dark: { color: 'white' },
			...props,
		} as ButtonProps
		return (
			<IconButton
				aria-label={'toggle color mode'}
				icon={mode}
				onClick={toggleColorMode}
				position={'fixed'}
				{...buttonStyles}
			/>
		)
	}
}
