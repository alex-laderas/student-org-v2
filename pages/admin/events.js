import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Button, Flex, Heading, Input, Table, Tbody, Td, Textarea, Tfoot, Tr, VStack } from "@chakra-ui/react";

import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavAdmin from "../../layout/NavAdmin";


export default function Events() {
    return (
        <>
            <Flex w={'90vw'} bg={'white'} flexDir={[null, 'column', 'row']} justifyContent={'center'} p={'2rem'}>
                <Flex flexDir={'column'} m={'2rem'} w={[null, '90%','60%']}>
                    <Card bg={'blackAlpha.100'} p={'2rem'} borderRadius={'10px'}>
                        <CardHeader>
                            <Heading size={'lg'}>Upcoming Events</Heading>
                        </CardHeader>
                        <CardBody>
                            <Table variant={'simple'} colorScheme={'blackAlpha'}>
                                <Tbody>
                                    <Tr fontWeight={'semibold'} color={'blackAlpha.700'}>
                                        <Td>01-01-2021</Td>
                                        <Td>Event Name</Td>
                                        <Td>Event Location</Td>
                                    </Tr>
                                    <Tr fontWeight={'semibold'} color={'blackAlpha.700'}>
                                        <Td>01-01-2021</Td>
                                        <Td>Event Name</Td>
                                        <Td>Event Location</Td>
                                    </Tr>
                                    <Tr fontWeight={'semibold'} color={'blackAlpha.700'}>
                                        <Td>01-01-2021</Td>
                                        <Td>Event Name</Td>
                                        <Td>Event Location</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                            <Flex justifyContent={'right'} mt={'8px'}>
                                <Button variant={'solid'} colorScheme={'red'}>Add Event</Button>
                            </Flex>
                        </CardBody>
                    </Card>
                    <Card bg={'blackAlpha.100'} p={'2rem'} borderRadius={'10px'} mt={'2rem'}>
                        <CardHeader>
                            <Heading size={'lg'} >Post an Announcement</Heading>
                        </CardHeader>
                        <CardBody mt={'10px'}>
                            <VStack spacing={'4'}>
                                <Button variant={'solid'} colorScheme={'blackAlpha'} w={'full'}>Add Attachments</Button>
                                <Input placeholder="title" variant={'outline'} bg={'white'} focusBorderColor={'primary.100'}></Input>
                                <Textarea placeholder="body" variant={'outline'} bg={'white'} focusBorderColor={'primary.100'}></Textarea>
                            </VStack>
                        </CardBody>
                        <Flex justifyContent={'right'} mt={'8px'}>
                            <Button variant={'solid'} colorScheme={'red'}>Post</Button>
                        </Flex>
                    </Card>
                </Flex>
                <Flex m={'2rem'} w={[null, '90%','40%']} flexDir={'column'}>
                    <Button w={'full'} leftIcon={<FontAwesomeIcon icon={faClockRotateLeft}/>}>View posted events/announcements</Button>
                    <Box w={'full'} mt={'2rem'}>
                        <Table variant={'simple'}>
                            <Tbody>
                                <Tr>
                                    <Td>11-4-22</Td>
                                    <Td>Polytechnic University of the Philippines San Juan Recognition Rites</Td>
                                </Tr>
                                <Tr>
                                    <Td>11-4-22</Td>
                                    <Td>Polytechnic University of the Philippines San Juan Recognition Rites</Td>
                                </Tr>
                                <Tr>
                                    <Td>11-4-22</Td>
                                    <Td>Polytechnic University of the Philippines San Juan Recognition Rites</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

Events.Layout = NavAdmin;