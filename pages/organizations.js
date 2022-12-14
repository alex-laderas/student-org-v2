import { Box, Container, Heading, HStack, Button, VStack, Stack, Text, Icon, Flex, Spacer, Input, InputGroup, InputRightElement, SimpleGrid} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import NavMain from "../layout/NavMain";

export default function Organizations() {
    return (
        <>
            <NavMain>
                <Flex flexDir={'column'} justifyContent={'center'} h={'100%'} mt={'-8rem'}>
                    <Heading as={'h1'} size={'2xl'} color={'white'} m={'auto'}>Organizations</Heading>
                </Flex>
            </NavMain>
            <Flex flexDir={'column'} bg={'backdrop.100'} pt={'2rem'} px={'4rem'} w={'100vw'}>
                <HStack display={'flex'} justifyContent={'space-between'} w={'100%'}>
                    <HStack>
                        <Button>My Organizations</Button>
                        <Spacer/>
                        <Button>Other Organizations</Button>
                    </HStack>
                    <Spacer/>
                    <InputGroup>
                        <Input maxW={'600px'} placeholder='search organizations' variant={'filled'} focusBorderColor={'secondary.100'} bg={'whiteAlpha.100'} color={'secondary.100'}  _placeholder={{ color: 'gray'}} ml={'auto'} leftIcon={<FontAwesomeIcon icon={faMagnifyingGlass} size='2x' color="#888"/>} />
                        <InputRightElement children={<FontAwesomeIcon icon={faMagnifyingGlass} size='1x' color="#888"/>} />
                    </InputGroup>
                </HStack>
                <Flex px={'2rem'} my={'4rem'} justifyContent={'center'}>
                    <SimpleGrid columns={[null, '1', '2']} spacing={'10'}>
                        <Box bg={'whiteAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'whiteAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'whiteAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'whiteAlpha.100'} minW={'350px'} minH={'350px'} borderRadius={'12px'}>
                            
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    )
}