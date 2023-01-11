import { Button, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";



export default function AdminOrg({children}) {
    return (
        <>
            <Flex flexDir={'column'} bg={'white'} w={'75%'} mx={'2rem'} p={'1rem'}>
                <HStack>
                    <Link href={'/admin/organizations/'}>
                        <Button variant={'ghost'}>View</Button>
                    </Link>
                    <Link href={'/admin/organizations/manageorg'}>
                        <Button variant={'ghost'}>Manage Organization</Button>
                    </Link>
                    <Link href={'/admin/organizations/createorg'}>
                        <Button variant={'ghost'}>Create New Organization</Button>
                    </Link>
                </HStack>
                <Flex mt={'2rem'}>
                    {children}
                </Flex>
            </Flex>
        </>
    )
}