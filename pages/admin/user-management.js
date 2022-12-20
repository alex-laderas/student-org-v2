import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Button, Flex, Heading, HStack, Switch, Table, Tbody, Td, Tr, VStack } from "@chakra-ui/react";
import NavAdmin from "../../layout/NavAdmin";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBlenderPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function UserManage() {
    return (
        <>
            <Flex w={'90vw'} bg={'white'} flexDir={[null, 'column','row']} justifyContent={'center'} p={'2rem'}>
                <Flex w={"full"} bg={'primary.100'} m={[null, '0','-2rem']} mr={[null, 0, '2rem']} p={'2rem'}>
                    <Heading color={'secondary.100'}>Administrators</Heading>
                </Flex>
                <Flex w={'90%'} m={'2rem'} flexDir={'column'}>
                    <VStack spacing={4}>
                        <Heading>Admin Permissions</Heading>
                        <Card border={'2px'} w={'full'} borderColor={'primary.100'} p={'1rem'} borderRadius={'12px'}>
                            <CardBody>
                                <HStack spacing={4} justifyContent={'space-between'}>
                                    <Heading size={'md'} fontWeight={'semibold'}>Admin Privileges</Heading>
                                    <Switch size={'md'} colorScheme={'red'}/>
                                </HStack>
                            </CardBody>
                        </Card>
                        <Card border={'2px'} w={'full'} borderColor={'primary.100'} p={'1rem'} borderRadius={'12px'}>
                            <CardBody>
                                <HStack spacing={4} justifyContent={'space-between'}>
                                    <Heading size={'md'} fontWeight={'semibold'}>User Management</Heading>
                                    <Switch size={'md'} colorScheme={'red'}/>
                                </HStack>
                            </CardBody>
                        </Card>
                        <Card border={'2px'} w={'full'} borderColor={'primary.100'} p={'1rem'} borderRadius={'12px'}>
                            <CardBody>
                                <HStack spacing={4} justifyContent={'space-between'}>
                                    <Heading size={'md'} fontWeight={'semibold'}>Event Management</Heading>
                                    <Switch size={'md'} colorScheme={'red'}/>
                                </HStack>
                            </CardBody>
                        </Card>
                        <Card border={'2px'} w={'full'} borderColor={'primary.100'} p={'1rem'} borderRadius={'12px'}>
                            <CardBody>
                                <HStack spacing={4} justifyContent={'space-between'}>
                                    <Heading size={'md'} fontWeight={'semibold'}>Organization Management</Heading>
                                    <Switch size={'md'} colorScheme={'red'}/>
                                </HStack>
                            </CardBody>
                        </Card>
                    </VStack>
                    <Table variant={'simple'} m={[null, 0,'2rem']} my={'2rem'}>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <FontAwesomeIcon size='2xl' icon={faEnvelope}/>
                                </Td>
                                <Td fontWeight={'semibold'} color={'blackAlpha.900'}>jlgfraro@iskolarngbayan.pup.edu.ph</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <FontAwesomeIcon size='2xl' icon={faVenusMars}/>
                                </Td>
                                <Td fontWeight={'semibold'} color={'blackAlpha.900'}>Male</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <FontAwesomeIcon size='2xl' icon={faHouse}/>
                                </Td>
                                <Td fontWeight={'semibold'} color={'blackAlpha.900'}>Mandaluyong City</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <FontAwesomeIcon size='2xl' icon={faBlenderPhone}/>
                                </Td>
                                <Td fontWeight={'semibold'} color={'blackAlpha.900'}>09256716731</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Flex justifyContent={'right'}>
                        <HStack spacing={4}>
                            <Button variant={'link'} colorScheme={'red'}>Reset Password</Button>
                            <Button variant={'solid'} colorScheme={'red'}>Save</Button>
                        </HStack>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

UserManage.Layout = NavAdmin;