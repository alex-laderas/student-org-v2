import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Button, Flex, Heading, ScaleFade, Table, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import NavProfile from "../../layout/NavProfile"



export default function MyProfile() {
    return (
        <>
        <Flex w={'90vw'} bg={'white'} flexDir={'column'} justifyContent={'center'} p={'2rem'}>
                    <Box borderBottom={'2px'} borderColor={'primary.100'} pb={'2rem'} px={'2rem'} mx={'-2rem'}>
                        <Heading as={'h1'} fontSize={'4xl'} color={'primary.100'}>Raro, Jon Liem Grettel F. (2019-00198-SJ-0)</Heading>
                    </Box>
                    <Flex flexDir={[null, 'column', 'row']}>
                        <TableContainer w={[null, '100%','60vw']} my={'2rem'}>
                            <Table variant={'simple'}>
                                <Tbody>
                                    <Tr>
                                        <Td>Organization:</Td>
                                        <Td fontWeight={'bold'}>GLITCH (Governing League of I.T. Challengers)</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Student Number:</Td>
                                        <Td fontWeight={'bold'}>2019-00198-SJ-0</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Full Name:</Td>
                                        <Td fontWeight={'bold'}>Raro, Jon Liem Grettel Flores</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Gender:</Td>
                                        <Td fontWeight={'bold'}>Male</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Date of Birth:</Td>
                                        <Td fontWeight={'bold'}>November 25, 1999</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Webmail:</Td>
                                        <Td fontWeight={'bold'}>jlgfraro@iskolarngbayan.pup.edu.ph</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Email Address:</Td>
                                        <Td fontWeight={'bold'}>n/a</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Contact Number:</Td>
                                        <Td fontWeight={'bold'}>n/a</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <Flex w={'full'} flexDir={'column'} maxW={[null, 'none','600px']} mx={[null, '0','2rem']} my={'1rem'} justifyContent={'center'}>
                            <Box bg={'blackAlpha.100'} justifyContent={'center'} textAlign={'center'} minH={'440px'} mx={'4rem'} p={'2rem'} borderRadius={'12px'}>
                                <Text fontSize={'xl'} fontWeight="bold" color={'blackAlpha.700'}>Attach Image</Text>
                            </Box>
                            <Button variant={'solid'} colorScheme={'red'} m={'2rem'} mx={'4rem'}>Upload</Button>
                        </Flex>
                    </Flex>
                    <Card mx={'auto'} bg={'blackAlpha.100'} p={'2rem'} borderRadius={'12px'}>
                        <CardHeader>
                            <Heading size={'md'}>Credit Satisfaction Score:</Heading>
                        </CardHeader>
                        <CardBody mx={'auto'} textAlign={'center'}>
                            <Heading mx={'2rem'} my={'1rem'} size={'2xl'}>5</Heading>
                            <Heading size={'xl'}>Keep it up!</Heading>
                        </CardBody>
                    </Card>
                </Flex>
        </>
    )
}

MyProfile.Layout = NavProfile;