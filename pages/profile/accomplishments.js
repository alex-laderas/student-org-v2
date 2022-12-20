import { Box, Button, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import NavProfile from "../../layout/NavProfile"

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Accomplishments() {
    return (
        <>
            <Flex w={'90vw'} bg={'white'} flexDir={'column'} justifyContent={'center'} p={'2rem'}>
                <HStack w={'100%'} justifyContent={'center'}>
                    <Link href={'#'}>
                        <Button variant={'outline'}>My Accomplishments</Button>
                    </Link>
                    <Link href={'#'}>

                        <Button leftIcon={<FontAwesomeIcon icon={ faPlus }/>} variant={'solid'} colorScheme={'red'}>Create</Button>
                    </Link>
                </HStack>
                <SimpleGrid columns={[null, 1, 4]} spacing={'10'} m={'2rem'}>
                    <Box bg={'blackAlpha.100'} minW={'200px'} minH={'200px'} borderRadius={'12px'}>
                            
                    </Box>
                    <Box bg={'blackAlpha.100'} minW={'200px'} minH={'200px'} borderRadius={'12px'}>
                            
                    </Box>
                    <Box bg={'blackAlpha.100'} minW={'200px'} minH={'200px'} borderRadius={'12px'}>
                            
                    </Box>
                    <Box bg={'blackAlpha.100'} minW={'200px'} minH={'200px'} borderRadius={'12px'}>
                            
                    </Box>
                    <Box bg={'blackAlpha.100'} minW={'200px'} minH={'200px'} borderRadius={'12px'}>
                            
                    </Box>
                    <Box bg={'blackAlpha.100'} minW={'200px'} minH={'200px'} borderRadius={'12px'}>
                            
                    </Box>
                    <Box bg={'blackAlpha.100'} minW={'200px'} minH={'200px'} borderRadius={'12px'}>
                            
                    </Box>
                </SimpleGrid>
            </Flex>
        </>
    )
}

Accomplishments.Layout = NavProfile;