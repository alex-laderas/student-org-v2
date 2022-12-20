import { Box, Button, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import NavProfile from "../../layout/NavProfile"



export default function Events() {
    return (
        <>
            <Flex w={'90vw'} bg={'white'} flexDir={'column'} justifyContent={'center'} p={'2rem'}>
                <HStack w={'100%'} justifyContent={'center'}>
                    <Link href={'#'}>
                        <Button variant={'outline'}>On-Going</Button>
                    </Link>
                    <Link href={'#'}>
                        <Button variant={'outline'}>Finished</Button>
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

Events.Layout = NavProfile;