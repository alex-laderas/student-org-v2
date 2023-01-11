import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Button, Flex, Heading, HStack, Input, Radio, RadioGroup, Switch, Table, Tbody, Td, Text, Tr, VStack } from "@chakra-ui/react";
import NavSuperAdmin from "../../../layout/NavSuperAdmin";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faVenusMars } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBlenderPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function UserManage() {
    return (
        <>
            <Flex w={'90vw'} bg={'white'} flexDir={[null, 'column','row']} justifyContent={'center'} p={'2rem'}>
                <Flex w={"75%"} bg={'primary.100'} m={[null, '0','-2rem']} mr={[null, 0, '2rem']} p={'2rem'}>
                    <Heading color={'secondary.100'}>Administrators</Heading>
                </Flex>
                <Flex w={'90%'} m={'2rem'} flexDir={'column'}>
                    <VStack spacing={4} alignItems={'flex-start'}>
                        <Box w={'full'}>
                            <Text fontSize={'2xl'} fontWeight={'semibold'}>Fullname</Text>
                            <Input size={'lg'} value={'John Doe'} focusBorderColor={'primary.100'} />
                        </Box>
                        <Box w={'full'}>
                            <Text fontSize={'2xl'} fontWeight={'semibold'}>Password</Text>
                            <Input type={'password'} size={'lg'} value={'iskolarngbayan123'} focusBorderColor={'primary.100'} />
                        </Box>
                        <Box w={'full'}>
                            <Text fontSize={'2xl'} fontWeight={'semibold'}>Gender</Text>
                            <RadioGroup defaultValue={'male'} mt={'1rem'}>
                                <HStack spacing={4}>
                                    <Radio value={'male'} size={'lg'}>male</Radio>
                                    <Radio value={'female'} size={'lg'}>female</Radio>
                                    <Radio value={'other'} size={'lg'}>others</Radio>
                                </HStack>
                            </RadioGroup>
                        </Box>
                        <Box w={'full'}>
                            <Text fontSize={'2xl'} fontWeight={'semibold'}>Contact Number</Text>
                            <Input type={'number'} size={'lg'} value={'09121861762'} focusBorderColor={'primary.100'} />
                        </Box>
                        <Box w={'full'}>
                            <Text fontSize={'2xl'} fontWeight={'semibold'}>Email Address</Text>
                            <Input type={'email'} size={'lg'} value={'johndoe@iskolarngbayan.edu.ph'} focusBorderColor={'primary.100'} />
                        </Box>
                        <Box w={'full'}>
                            <Text fontSize={'2xl'} fontWeight={'semibold'}>Address</Text>
                            <Input type={'text'} size={'lg'} value={'Mandaluyong City'} focusBorderColor={'primary.100'} />
                        </Box>
                    </VStack>

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
                    
                    <Flex justifyContent={'right'} mt={'2rem'}>
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

UserManage.Layout = NavSuperAdmin;