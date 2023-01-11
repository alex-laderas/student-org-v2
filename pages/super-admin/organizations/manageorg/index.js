import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

import AdminOrg from "../../../../layout/AdminOrg";
import NavAdmin from "../../../../layout/NavAdmin";

export default function ManageOrg() {
    return(
        <>
            <AdminOrg>
                <Flex justifyContent={'center'} flexDir={'column'}>
                    <SimpleGrid columns={[null, 1, 3]} m={'2rem'} spacing={10}>
                        <Link href={'/admin/organizations/manageorg/glitch'}>
                            <Box borderRadius={'12px'} minW={'300px'} w={'full'} minH={'200px'} bg={'blackAlpha.100'} p={'1rem'}>
                                <Heading fontSize={'2xl'}>GLITCH</Heading>
                            </Box>
                        </Link>
                        <Link href={'#'}>
                            <Box borderRadius={'12px'} minW={'300px'} w={'full'} minH={'200px'} bg={'blackAlpha.100'} p={'1rem'}>
                                <Heading fontSize={'2xl'}>JPIA</Heading>
                            </Box>
                        </Link>
                        <Link href={'#'}>
                            <Box borderRadius={'12px'} minW={'300px'} w={'full'} minH={'200px'} bg={'blackAlpha.100'} p={'1rem'}>
                                <Heading fontSize={'2xl'}>PSO</Heading>
                            </Box>
                        </Link>
                    </SimpleGrid>
                </Flex>
            </AdminOrg>
        </>
    )
}

ManageOrg.Layout = NavAdmin;