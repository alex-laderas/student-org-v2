import { Box, Button, Flex, Heading, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminOrg from "../../../../layout/AdminOrg";
import NavAdmin from "../../../../layout/NavAdmin";

import { useState } from "react";

export default function CreateOrg() {

    const [editContent, setEditContent] = useState(false);

    const [orgName, setOrgName] = useState('Glitch');
    const [description, setDescription] = useState('Governing League of I.T. Challengers');
    const [president, setPresident] = useState('Albert Arevalo');
    const [vicePresident, setVicePresident] = useState('');
    const [moderators, setModerators] = useState(['Sony B. Gecoso']);

    const toggleEdit = () => {
        setEditContent((current) => !current)
    }

    return(
        <>
            <AdminOrg>
                <Flex w={'full'}>
                    <VStack alignItems={'flex-start'} w={'full'}>
                        <Box w={'full'}>
                            <Heading fontSize={'2xl'} mb={'1rem'}>Organization Name</Heading>
                            <Text fontSize={'3xl'} color={'primary.100'} display={editContent ? 'none' : 'block'}>{orgName}</Text>
                            <Input mt={'1rem'} focusBorderColor="primary.100" display={editContent ? 'block' : 'none'} onChange={(e) => { setOrgName(e.target.value)}}/>
                        </Box>
                        <Box w={'full'}>
                            <Heading  fontSize={'2xl'} mb={'1rem'}>Description</Heading>
                            <Text fontSize={'3xl'} color={'primary.100'} display={editContent ? 'none' : 'block'}>{description}</Text>
                            <Textarea mt={'1rem'} focusBorderColor="primary.100" display={editContent ? 'block' : 'none'} onChange={(e) => { setDescription(e.target.value)}}></Textarea>
                        </Box>
                        <Box w={'full'}>
                            <Heading  fontSize={'2xl'} mb={'1rem'}>President</Heading>
                            <Text fontSize={'3xl'} color={'primary.100'} display={editContent ? 'none' : 'block'}>{president}</Text>
                            <Input mt={'1rem'} focusBorderColor="primary.100" placeholder="enter name" display={editContent ? 'block' : 'none'} onChange={(e) => { setPresident(e.target.value)}}/>
                        </Box>
                        <Box w={'full'}>
                            <Heading  fontSize={'2xl'} mb={'1rem'} >Vice President</Heading>
                            <Text fontSize={'3xl'} color={'primary.100'} display={editContent ? 'none' : 'block'}>{vicePresident}</Text>
                            <Input mt={'1rem'} focusBorderColor="primary.100" placeholder="enter name" display={editContent ? 'block' : 'none'} onChange={(e) => { setVicePresident(e.target.value)}}/>
                        </Box>
                        <Box w={'full'}>
                            <Heading  fontSize={'2xl'} mb={'1rem'}>Moderators</Heading>
                            <HStack display={editContent ? 'none' : 'block'}>
                                <Text fontSize={'3xl'} color={'primary.100'}>Sony B. Gecoso</Text>
                            </HStack>
                            <HStack display={editContent ? 'block' : 'none'}>
                                <Input mt={'1rem'} focusBorderColor="primary.100" placeholder="enter email address" onChange={(e) => { setModerators(e.target.value)}}></Input>
                                <Button><FontAwesomeIcon icon={faPlus}/></Button>
                            </HStack>
                        </Box>
                        <HStack spacing={4} mt={'1rem'}>
                            <Button onClick={toggleEdit}>Edit</Button>
                            <Button  colorScheme={'red'}>Save</Button>
                        </HStack>
                    </VStack>
                </Flex>
            </AdminOrg>
        </>
    )
}

CreateOrg.Layout = NavAdmin;