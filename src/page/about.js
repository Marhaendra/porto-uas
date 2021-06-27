import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

export default function About(props) {
    return (
        <>
            <Layout >
                <Container maxW="7xl" paddingTop={{ base: "7", md: "20", lg: "40" }} paddingLeft={{ base: "7", md: "20", lg: "20" }} paddingRight={{ base: "7", md: "20", lg: "20" }} paddingBottom={{ base: "20" }} minHeight="90vh">
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Box mt={{ base: "44", md: "28", lg: "0" }}>
                            <Heading as="h1" fontFamily="Inconsolata" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "2xl", md: "5xl", lg: "7xl" }}>
                                About Me
                            </Heading>
                        </Box>
                    </Fade>
                    <Fade duration={500} distance="30px" fraction={0.4} bottom delay={340}>
                        <Box mt={{ base: "44", md: "28", lg: "0" }}>
                            <Grid
                                h="full"
                                width="full"
                                templateRows="repeat(3, 1fr)"
                                templateColumns="repeat(8, 1fr)"
                                marginTop={{ base: "0.5", md: "7", lg: "1.5" }}
                                gap={{ base: 1, md: 4 }}
                            >
                                <GridItem colSpan={{ base: 8, md: 4, lg: 4 }} rowStart={1} width="full" height="full">
                                    <Heading as="h2" fontFamily="Inconsolata" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "md", md: "lg", lg: "xl" }} marginTop="35">
                                        Student of Software Engineering. Learn to mastery about web development, especially the UI/UX. Love to code beautifully and according to design.
                                    </Heading>
                                </GridItem>
                                <GridItem colStart={5} colEnd={8} rowStart={1} width="full" height="120px">
                                    <Heading as="h1" fontFamily="Inconsolata" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>
                                    
                                    </Heading>
                                </GridItem>
                                <GridItem colSpan={{ base: 6, md: 2, lg: 2 }} rowStart={3} width="full" height="full">
                                    <Heading as="h2" fontFamily="Inconsolata" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "md", md: "md", lg: "lg" }} marginTop="70" textColor="#8e9aaf">
                                        
                                    </Heading>
                                </GridItem>
                                <GridItem colStart={1} rowStart={2} width="full" height="full">
                                    <Fade duration={500} distance="30px" fraction={0.4} bottom delay={560}>
                                        <Heading as="h2" fontFamily="Inconsolata" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "lg", md: "lg", lg: "xl" }} marginTop="130">
                                            Contact Me
                                        </Heading>
                                    </Fade>
                                </GridItem>
                                <GridItem colStart={1} rowStart={3} width="full" height="full">
                                    <Fade duration={500} distance="30px" fraction={0.4} bottom delay={560}>
                                        <ion-icon name="mail-outline"></ion-icon>
                                    </Fade>
                                </GridItem>
                                <GridItem colStart={2} rowStart={3} width="full" height="full">
                                    <Fade duration={500} distance="30px" fraction={0.4} bottom delay={560}>
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </Fade>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Fade>
                </Container>
            </Layout>
        </>
    );
}