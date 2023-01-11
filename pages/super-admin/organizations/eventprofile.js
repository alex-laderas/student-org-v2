
import { Box, Button, Container, Divider, Flex, Heading, HStack, Input, Radio, RadioGroup, Text, Textarea, VStack } from "@chakra-ui/react";
import AdminOrg from "../../../layout/AdminOrg";
import NavSuperAdmin from "../../../layout/NavSuperAdmin";

import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { useState } from "react";

export default function EventProfile() {

    const [editContent, setEditContent] = useState(false);

    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');
    const [summary, setSummary] = useState('');
    const [recommendation, setRecommendation] = useState('');
    
    const toggleEdit = () => {
        setEditContent((current) => !current)
    }

    return(
        <>
            <AdminOrg>
                <Flex w={'full'}>
                    <VStack alignItems={'flex-start'} w={'full'}>
                        <Heading fontSize={'5xl'}>The Future of PUPSJ Programmers</Heading>
                        <HStack>
                            <FontAwesomeIcon icon={faCalendar} size={'2x'}/>
                            <Text fontWeight={'semibold'} fontSize={'xl'} display={editContent ? 'none' : 'block'}>1-1-23 (Monday)</Text>
                            <Input value={'1-1-23 (Monday)'} display={editContent ? 'block' : 'none'}/>
                        </HStack>
                        <HStack>
                            <FontAwesomeIcon icon={faLocationDot} size={'2x'}/>
                            <Text fontWeight={'semibold'} fontSize={'xl'}>On-campus</Text>
                            <RadioGroup display={editContent ? 'block' : 'none'} defaultValue={'on-campus'}>
                                <HStack spacing={4}>
                                    <Radio value={'on-campus'}>On-campus</Radio>
                                    <Radio value={'off-campus'}>Off-campus</Radio>
                                    <Radio value={'virtual'}>Virtual</Radio>
                                </HStack>
                            </RadioGroup>
                        </HStack>
                        <HStack>
                            <FontAwesomeIcon icon={faUserGroup} size={'2x'}/>
                            <Text fontWeight={'semibold'} fontSize={'xl'} display={editContent ? 'none' : 'block'}>0</Text>
                            <Input value={'0'} display={editContent ? 'block' : 'none'}/>
                        </HStack>
                        <Divider w={'full'} border={'2px'}/>
                        <Heading fontSize={'4xl'}>Summary of Events</Heading>
                        <Box w={'full'}>
                        <Text display={editContent ? 'none' : 'block'}>The event went smooothly as the students participated in engaging activities and learn more about developing their skills as IT students, rewards and prizes were given to students that participated and excelled during the activities and seem to enjoy for the duration of the whole event.</Text>
                        <Textarea display={editContent ? 'block' : 'none'}>The event went smooothly as the students participated in engaging activities and learn more about developing their skills as IT students, rewards and prizes were given to students that participated and excelled during the activities and seem to enjoy for the duration of the whole event.</Textarea>
                        </Box>
                        <Divider w={'full'} border={'2px'}/>
                        <Heading fontSize={'4xl'}>Recommendation</Heading>
                        <Box w={'full'}>
                            <Text display={editContent ? 'none' : 'block'}>As the event went smoothly, the students have requested to learn more about specific topics including skills that encourage them to excel in web developing. As more and more technologies arise, the students have decided to start with front-end developing as their starting point for the next event.</Text>
                            <Textarea display={editContent ? 'block' : 'none'}>As the event went smoothly, the students have requested to learn more about specific topics including skills that encourage them to excel in web developing. As more and more technologies arise, the students have decided to start with front-end developing as their starting point for the next event.</Textarea>
                        </Box>
                        <Flex justifyContent={'flex-end'} w={'full'}>
                            <HStack spacing={4}>
                                <Button variant={'ghost'} onClick={toggleEdit}>Edit</Button>
                                <Button variant={'ghost'}>Save</Button>
                            </HStack>
                        </Flex>
                    </VStack>
                    
                </Flex>
            </AdminOrg>
        </>
    )
}

EventProfile.Layout = NavSuperAdmin