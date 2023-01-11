import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Button, Flex, Heading, Input, Table, Tbody, Td, Textarea, Tfoot, Thead, Tr, VStack } from "@chakra-ui/react";

import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import NavSuperAdmin from "../../layout/NavSuperAdmin";

import EventDetails from "../../layout/admin/eventDetails";

export default function Events() {
    return (
        <>
            <EventDetails/>
            <Flex w={'90vw'} bg={'white'} flexDir={[null, 'column', 'row']} justifyContent={'center'} p={'2rem'}>
                <Flex flexDir={'column'} m={'2rem'} w={[null, '90%','60%']}>
                    <Card bg={'blackAlpha.100'} p={'2rem'} borderRadius={'10px'}>
                        <CardHeader>
                            <Heading size={'lg'}>Upcoming Events</Heading>
                        </CardHeader>
                        <CardBody>
                            <Table variant={'striped'} colorScheme={'blackAlpha'}>
                                <Thead>
                                    <Tr fontWeight={'semibold'}>
                                        <Td>Date</Td>
                                        <Td>Event Name</Td>
                                        <Td>Location/Venue</Td>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr fontWeight={'semibold'} color={'blackAlpha.700'}>
                                        <Td>1-5-23</Td>
                                        <Td>Webinar</Td>
                                        <Td>Virtual</Td>
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
                            <VStack spacing={'4'} justifyContent={'center'}>
                                <Input type={'file'} variant={'solid'} colorScheme={'blackAlpha'} />
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
                    <Link href={'/events'}>
                        <Button w={'full'} leftIcon={<FontAwesomeIcon icon={faClockRotateLeft}/>}>View posted events/announcements</Button>
                    </Link>
                    <Box w={'full'} mt={'2rem'}>
                        <Table variant={'simple'}>
                            <Tbody>
                                <Tr>
                                    <Td>1-1-23</Td>
                                    <Td>Webinar: The Future of PUPSJ Programmers</Td>
                                </Tr>
                                <Tr>
                                    <Td>1-3-23</Td>
                                    <Td>Student Assembly Orientation</Td>
                                </Tr>
                                <Tr>
                                    <Td>1-5-23</Td>
                                    <Td>Webinar</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

Events.Layout = NavSuperAdmin;