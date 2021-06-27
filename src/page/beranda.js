import React from 'react';
import Fade from 'react-reveal/Fade';
import Layout from "../common/component/layout/layout";
import { Box, Text, Container, Grid, GridItem, Heading } from '@chakra-ui/react';

export default function Beranda(props) {
    return (
        <>
            <Layout >
                <Container maxW="1300px" paddingTop={{ base: "12", md: "30", lg: "60" }} paddingLeft={{ base: "7", md: "20", lg: "20" }} paddingRight={{ base: "7", md: "20", lg: "20" }} paddingBottom={{ base: "20" }} minHeight="96vh">
                    <Fade duration={500} distance="30px" fraction={0.4} bottom>
                        <Box mt={{ base: "44", md: "28", lg: "0" }}>
                            <Grid
                                h="full"
                                width="full"
                                templateRows="repeat(3, 1fr)"
                                templateColumns="repeat(8, 1fr)"
                                marginTop={{ base: "0.5", md: "7", lg: "1.5" }}
                            >
                                <GridItem colSpan={{ base: 8, md: 4, lg: 4 }} rowStart={1} width="full" height="full">
                                    <Heading as="h1" fontFamily="Inconsolata" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>
                                        Hi, I'am Marhaendra
                                    </Heading>
                                </GridItem>
                                <GridItem colStart={5} colEnd={8} rowStart={1} width="full" height="120px">
                                    <Heading as="h1" fontFamily="Inconsolata" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "1xl", md: "3xl", lg: "5xl" }}>
                                    <img src="https://keep.google.com/u/0/media/v2/1QmFFZjW-Lzkfr4USAGkwVkv3I0Q_pcQXlbVEUJasImv-XKAUYkdHdE5C9FhjrqszC1La/1FhR91T5RV2BxQw-yNWTkiax0VlRMLdb-FuqQIokJiO24F_ln51-zKCBrz9knfCiBc99Y?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=5000" alt="Italian Trulli"></img>
                                    </Heading>
                                </GridItem>
                                <GridItem colSpan={{ base: 6, md: 2, lg: 2 }} rowStart={2} width="full" height="full">
                                    <Heading as="h1" fontFamily="Inconsolata" letterSpacing={"-.0.001rem"} lineHeight={"-.0.001rem"} fontSize={{ base: "XL", md: "XL", lg: "2xl" }} marginTop="130">
                                        I learning
                                    </Heading>
                                </GridItem>
                                <GridItem colSpan={1} rowStart={3} width="120px" height="120px" >
                                    <ion-icon name="logo-nodejs"></ion-icon>
                                </GridItem>
                                <GridItem colSpan={1} rowStart={3} width="120px" height="120px"> 
                                    <ion-icon name="logo-react"></ion-icon>
                                </GridItem>
                                <GridItem colSpan={1} rowStart={3} width="120px" height="120px" >
                                    <ion-icon name="logo-vue"></ion-icon>
                                </GridItem>
                                <GridItem colSpan={1} rowStart={3} width="120px" height="120px">
                                    <ion-icon name="logo-laravel"></ion-icon>
                                </GridItem>
                            </Grid>
                        </Box>
                    </Fade>
                </Container>
            </Layout>
        </>
    );
}