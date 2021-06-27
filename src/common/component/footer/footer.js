import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function Footer(props) {
    return (
        <>
            <Box pt="1" pb="0" bottom="0" position="relative" as="footer" textAlign="center">
                <Text letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "xs", md: "sm" }} fontWeight="medium">Made With 🖤 For UAS Praktikum Web 3 2021</Text>
            </Box>
        </>
    );
}