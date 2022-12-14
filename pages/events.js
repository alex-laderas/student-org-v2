import { Box, Container, Heading, HStack, Button, VStack, Stack, Text, Icon, Flex, Spacer, Input, InputGroup, InputRightElement, SimpleGrid, Divider, Tag} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import NavMain from "../layout/NavMain";


export default function Events() {
    return (
        <>
            <NavMain>
            <Flex flexDir={'column'} justifyContent={'center'} h={'100%'} mt={'-8rem'}>
                    <Heading as={'h1'} size={'2xl'} color={'white'} m={'auto'}>Events</Heading>
                </Flex>
            </NavMain>
            <Flex bg={'white'} py={'2rem'} flexDir={'column'} justifyContent={'center'} w={'100vw'}>
                <Heading alignSelf={'center'}>Upcoming Events</Heading>
                <Flex px={'4rem'} justifyContent={'center'} mt={'4rem'}>
                    <SimpleGrid columns={[null, 2, 3]} spacing={10}>
                        <Box bg={'gray'} minW={'300px'} minH={'300px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'gray'} minW={'300px'} minH={'300px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'gray'} minW={'300px'} minH={'300px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'gray'} minW={'300px'} minH={'300px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'gray'} minW={'300px'} minH={'300px'} borderRadius={'12px'}>
                            
                        </Box>
                        <Box bg={'gray'} minW={'300px'} minH={'300px'} borderRadius={'12px'}>
                            
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
            <Flex border={'1px'} w={'90vw'} mt={'-4px'} mx={'auto'}/>
            <Flex bg={'white'} justifyContent={'space-around'} pt={'2rem'}>
                <VStack ml={'4rem'}>
                    <Heading>Polytechnic University of the Philippines, San Juan Branch Recognition Rites</Heading>
                </VStack>
                <VStack mr={'4rem'}>
                    <Heading size={'xl'} fontWeight={'semibold'}>Announcements</Heading>
                    <Flex border={'1px'} w={'100%'} />
                    <Flex w={'100%'} pt={'12px'}>
                        <Tag w={'fit-content'} h={'60px'} alignContent='center' minW={'110px'}>
                            <FontAwesomeIcon icon={faCalendar} />
                            <Text p={'12px'}>11-13-22</Text>
                        </Tag>
                        <VStack ml={'20px'} alignItems='left'>
                        <Text>Polytechnic University of the Philipines San Juan Branch</Text>
                        <Text fontWeight={'semibold'}>Recognition Rites</Text>
                        </VStack>
                    </Flex>
                    <Flex w={'100%'} pt={'12px'}>
                    <Tag w={'fit-content'} h={'60px'} alignContent='center' minW={'110px'}>
                            <FontAwesomeIcon icon={faCalendar} />
                            <Text p={'12px'}>10-25-22</Text>
                        </Tag>
                        <VStack ml={'20px'} alignItems='left'>
                        <Text>PUPSJ BSIT GLITCH</Text>
                        <Text fontWeight={'semibold'}>Recognition Rites</Text>
                        </VStack>
                    </Flex>
                    <Heading size={'xl'} fontWeight={'semibold'}>Active Participants</Heading>
                    <Flex border={'1px'} w={'100%'} />
                </VStack>
            </Flex>
        </>
    )
}