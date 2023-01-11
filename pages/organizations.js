import { Box, Container, Heading, HStack, Button, VStack, Stack, Text, Icon, Flex, Spacer, Input, InputGroup, InputRightElement, SimpleGrid, Progress, Sca, ScaleFade} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import NavMain from "../layout/NavMain";


export default function Organizations() {


    return (
        <>
            <NavMain>
                <Flex flexDir={'column'} justifyContent={'center'} h={'99%'} mt={'-8rem'}>
                    <ScaleFade in={true} initialScale={0.4}>
                        <Heading as={'h1'} size={'2xl'} color={'white'} m={'auto'} textAlign={'center'}>Organizations</Heading>
                    </ScaleFade>
                </Flex>
            </NavMain>
            <Flex flexDir={'column'} bg={'white'} pt={'2rem'} px={'4rem'} w={'99vw'}>
                <HStack display={'flex'} justifyContent={'space-between'} w={'100%'}>
                    <HStack>
                        <Button colorScheme={'red'}>My Organizations</Button>
                        <Spacer/>
                        <Button colorScheme={'blackAlpha'}>Other Organizations</Button>
                    </HStack>
                    <Spacer/>
                    <InputGroup>
                        <Input maxW={'600px'} placeholder='search organizations' colorScheme={'blackAlpha'} variant={'filled'} focusBorderColor={'primary.100'} color={'black'}  _placeholder={{ color: 'gray'}} ml={'auto'} leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} size='2x' color="#888"/>} />
                        <InputRightElement children={<FontAwesomeIcon icon={faMagnifyingGlass} size='1x' color="#888"/>} />
                    </InputGroup>
                </HStack>
                <Flex px={'2rem'} my={'4rem'} justifyContent={'center'}>
                    <SimpleGrid columns={[null, '1', '3']} spacing={'10'}>
                        <Box bg={'blackAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'blackAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'blackAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'blackAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'blackAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'blackAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    )
}