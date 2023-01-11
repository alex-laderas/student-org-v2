import { Box, Container, Heading, HStack, Button, VStack, Stack, Text, Icon, Flex, Spacer, Input, InputGroup, InputRightElement, SimpleGrid, Divider, Tag, ScaleFade, Image} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import {recrites} from '../../public/recrites.png'

import NavMain from "../../layout/NavMain";


export default function Events() {
    return (
        <>
            <NavMain>
            <Flex flexDir={'column'} justifyContent={'center'} h={'100%'} mt={'-8rem'}>
                <ScaleFade in={true} initialScale={0.4}>
                    <Heading as={'h1'} size={'2xl'} color={'white'} m={'auto'} textAlign={'center'}>Events</Heading>
                </ScaleFade>
            </Flex>
            </NavMain>
            <Flex bg={'white'} py={'2rem'} flexDir={'column'} justifyContent={'center'}>
                <Heading alignSelf={'center'}>Upcoming Events</Heading>
                <Flex px={'4rem'} justifyContent={'space-around'} mt={'4rem'}>
                    <SimpleGrid columns={[null, 1, 3]} spacing={10}>
                        <Box position={'relative'} bg={'blackAlpha.100'} minW={'400px'} minH={'300px'} borderRadius={'12px'} p={'1rem'}>
                            <Heading fontSize={'2xl'}>Student Assembly Orientation</Heading>
                            <HStack>
                                <FontAwesomeIcon icon={faCalendar} />
                                <Text fontWeight={'semibold'}>1-1-23</Text>
                            </HStack>
                            <Button colorScheme={'red'} bottom={0} position={"absolute"} mb={'1rem'}>Join</Button>
                        </Box>
                        <Box position={'relative'} bg={'blackAlpha.100'} minW={'400px'} minH={'300px'} borderRadius={'12px'} p={'1rem'}>
                            <Heading fontSize={'2xl'}>Webinar: The Future of PUPSJ Programmers</Heading>
                            <HStack>
                                <FontAwesomeIcon icon={faCalendar} />
                                <Text fontWeight={'semibold'}>1-3-23</Text>
                            </HStack>
                            <Button colorScheme={'red'} position={'absolute'} bottom={0} mb={'1rem'}>Join</Button>
                        </Box>
                        <Box position={'relative'} bg={'blackAlpha.100'} minW={'400px'} minH={'300px'} borderRadius={'12px'} p={'1rem'}>
                            <Heading fontSize={'2xl'}>Webinar</Heading>
                            <HStack>
                                <FontAwesomeIcon icon={faCalendar} />
                                <Text fontWeight={'semibold'}>1-5-23</Text>
                            </HStack>
                            <Button colorScheme={'red'} position={'absolute'} bottom={0} mb={'1rem'}>Join</Button>
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
            <Flex border={'1px'} w={'90vw'} mt={'-4px'} mx={'auto'}/>
            <Flex bg={'white'} flexDir={[null, 'column', 'row']} justifyContent={'space-around'} alignItems={'center'} pt={'2rem'}>
                <VStack mx={'auto'} ml={[null, 'auto', '4rem']} textAlign={[null, 'center', 'left']} p={'2rem'}>
                    <Image src="/recrites.png"/>
                    <Heading>Polytechnic University of the Philippines, San Juan Branch Recognition Rites</Heading>
                </VStack>
                <VStack mx={'auto'} mt={[null, '2rem', '0']} mr={[null, 'auto','4rem']}>
                    <Heading size={'xl'} fontWeight={'semibold'}>Announcements</Heading>
                    <Flex border={'1px'} w={'100%'} />
                    <Flex w={'100%'} pt={'12px'}>
                        <Tag w={'fit-content'} h={'60px'} alignContent='center' minW={'110px'}>
                            <FontAwesomeIcon icon={faCalendar} />
                            <Text p={'12px'}>11-13-22</Text>
                        </Tag>
                        <VStack ml={'20px'} alignItems='left'>
                        <Text fontSize={[null, 'xs', 'md']}>Polytechnic University of the Philipines San Juan Branch</Text>
                        <Text fontSize={[null, 'xs', 'md']} fontWeight={'semibold'}>Recognition Rites</Text>
                        </VStack>
                    </Flex>
                    <Flex w={'100%'} pt={'12px'}>
                    <Tag w={'fit-content'} h={'60px'} alignContent='center' minW={'110px'}>
                            <FontAwesomeIcon icon={faCalendar} />
                            <Text p={'12px'}>10-25-22</Text>
                        </Tag>
                        <VStack ml={'20px'} alignItems='left'>
                        <Text fontSize={[null, 'xs', 'md']}>PUPSJ BSIT GLITCH</Text>
                        <Text fontSize={[null, 'xs', 'md']} fontWeight={'semibold'}>General Assembly</Text>
                        </VStack>
                    </Flex>
                    <Flex border={'1px'} w={'100%'} />
                </VStack>
            </Flex>
        </>
    )
}