import { Box, Button, Flex, Heading, HStack, Input, Textarea, VStack } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import AdminOrg from "../../../layout/AdminOrg";
import NavSuperAdmin from "../../../layout/NavSuperAdmin";

export default function CreateOrg() {


    return(
        <>
            <AdminOrg>
                <Flex w={'full'}>
                    <VStack alignItems={'flex-start'} w={'full'}>
                        <Box w={'full'}>
                            <Heading fontSize={'2xl'}>Organization Name</Heading>
                            <Input mt={'1rem'} focusBorderColor="primary.100"/>
                        </Box>
                        <Box w={'full'}>
                            <Heading  fontSize={'2xl'}>Description</Heading>
                            <Textarea mt={'1rem'} focusBorderColor="primary.100"></Textarea>
                        </Box>
                        <Box w={'full'}>
                            <Heading  fontSize={'2xl'}>President</Heading>
                            <Input mt={'1rem'} focusBorderColor="primary.100" placeholder="enter name"/>
                        </Box>
                        <Box w={'full'}>
                            <Heading  fontSize={'2xl'}>Vice President</Heading>
                            <Input mt={'1rem'} focusBorderColor="primary.100" placeholder="enter name"/>
                        </Box>
                        <Box w={'full'}>
                            <Heading  fontSize={'2xl'}>Moderators</Heading>
                            <HStack>
                                <Input mt={'1rem'} focusBorderColor="primary.100" placeholder="enter email address"></Input>
                                <Button><FontAwesomeIcon icon={faPlus}/></Button>
                            </HStack>
                        </Box>
                        <Button mt={'1rem'} colorScheme={'red'}>Create Organization</Button>
                    </VStack>
                </Flex>
            </AdminOrg>
        </>
    )
}

CreateOrg.Layout = NavSuperAdmin;