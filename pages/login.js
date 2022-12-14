import { Box, Container, Heading, HStack, Button, VStack, Stack, Flex, Input, Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


export default function Login() {
    return (
        <>
            <Flex w={'100vw'} h={'100vh'}>
                <Flex bg={'primary.100'} w={'100%'} maxW={'75vw'} h={'100vh'} p={'2rem'}>
                    <Heading color={'secondary.100'}>PUPSJ Student Organizations</Heading>
                </Flex>
                <Flex bg={'whiteAlpha.100'} minW={'400px'} w={'25vw'} h={'100vh'} flexDir={'column'} justifyContent={'space-evenly'} p={'2rem'}>
                    <VStack spacing={10}>
                        <VStack w={'100%'} alignItems={'left'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'}>Student ID</Text>
                            <Input variant={'flushed'}></Input>
                        </VStack>
                        <VStack  w={'100%'} alignItems={'left'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'}>Password</Text>
                            <Input variant={'flushed'}></Input>
                        </VStack>
                    </VStack>
                    <VStack spacing={'10'} alignItems={'left'}>
                    <Link href={'/'}><Button colorScheme={'red'} w={'100%'}> Continue </Button></Link>
                        <Button variant={'unstyled'} color={'red'} fontSize={'xl'}>Forgot password?</Button>
                    </VStack>
                </Flex>
            </Flex>
        </>
    )
}