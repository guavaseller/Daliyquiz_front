import { Box, Center } from 'native-base'
import React from 'react'

export default function BackgroundDefault(props) {
    return (
        <Center bg="#455A65" safeArea>
            <Box w="85%" h="full">
                {props.children}
            </Box>
        </Center>
    )
}
