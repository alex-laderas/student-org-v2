import { Box, Button, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import NavProfile from "../../layout/NavProfile"



export default function Organizations() {
    return (
        <>
            <Flex w={'90vw'} bg={'white'} flexDir={'column'} justifyContent={'center'} p={'2rem'}>
                <HStack w={'100%'} justifyContent={'center'}>
                    <Link href={'#'}>
                        <Button variant={'outline'}>My Organizations</Button>
                    </Link>
                    <Link href={'#'}>
                        <Button variant={'outline'}>Other Organizations</Button>
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

Organizations.Layout = NavProfile;