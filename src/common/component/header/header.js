import React from 'react';
import { Box, Heading, Flex, useColorMode, IconButton, Button, useDisclosure, Spacer } from '@chakra-ui/react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Text,
    Divider
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';


function Header(props) {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const changeDarkMode = () => {
        toggleColorMode();
    }

    return (
        <>
            <Flex
                as="header"
                align="center"
                position="fixed"
                zIndex="9999"
                padding="1.5rem"
                width="full"
                bg={colorMode === "light" ? "#edf2fb" : "#0F1015"}
                color={colorMode === "light" ? "#0F1015" : "#edf2fb"}
                {...props}
            >
                <Flex align="center">
                    <Heading as="h1" size="md" letterSpacing={"-.0.01rem"} fontSize={{ base: "sm", md: "md", sm: "md", lg: "md" }}>
                        <ion-icon name="code-slash-outline" size="large"></ion-icon>
                    </Heading>
                    <Box
                        display={{ base: "none", md: "flex" }}
                        mt={{ base: 4, md: 0 }}
                        pl="12"
                    >
                        <Button
                            mt={{ base: 5, md: 0 }}
                            mr={6}
                            display="block"
                            size="md"
                            backgroundColor="transparent"
                        >
                            <Link to="/">Home</Link>
                        </Button>
                        <Button
                            mt={{ base: 5, md: 0 }}
                            mr={6}
                            display="block"
                            size="md"
                            backgroundColor="transparent"
                        >
                            <Link to="/portofolio">Portofolio</Link>
                        </Button>
                        <Button
                            mt={{ base: 5, md: 0 }}
                            mr={6}
                            display="block"
                            size="md"
                            backgroundColor="transparent"
                        >
                            <Link to="/about">About</Link>
                        </Button>
                    </Box>
                </Flex>

                <Spacer />
                <Box
                    display={{ base: "none", md: "flex" }}
                    mt={{ base: 4, md: 0 }}
                    alignContent="center"
                >
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={changeDarkMode} aria-label="button" />
                </Box>
                <Box display={{ base: "block", md: "none", lg: "none" }}>
                    <IconButton size="xs" bg="transparent" icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={changeDarkMode} aria-label="button" />
                    <Button size="xs" bg="transparent" onClick={onOpen}>👋</Button>
                </Box>
            </Flex>
            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                size="xs"
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody>
                        <Flex
                            align="center"
                            width="full"
                            wrap="wrap"
                            heigth="full"
                        >
                            <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1" >
                                <Text fontSize="xs" paddingX="1" fontWeight="bold"> <Link to="/">Home</Link> </Text>
                            </Box>
                            <Divider />
                            <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                                <Text fontSize="xs" paddingX="1" fontWeight="bold"><Link to="/portofolio">Portofolio</Link> </Text>
                            </Box>
                            <Spacer />
                            <Box as="button" textAlign="left" w="full" display="flex" h="min-content" paddingY="1">
                                <Text fontSize="xs" paddingX="1" fontWeight="bold"><Link to="/about">About</Link> </Text>
                            </Box>
                            <Divider />
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Header;