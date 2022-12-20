import { Box, Container, Heading, HStack, Button, VStack, Stack, Flex, Input, Text, InputGroup, InputL, InputLeftAddon} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";


export default function Login() {
    return (
        <>
            <Flex w={'100vw'} h={'100vh'} flexDir={[null, 'column', 'row']}>
                <Flex bg={'primary.100'} minW={'0'} w={'100%'} h={[null, '5vh','100vh']} p={'2rem'}>
                    <Heading textShadow='2px 2px #000000' color={'secondary.100'} display={[null, 'none', 'block']}>PUPSJ Student Organizations</Heading>
                </Flex>
                <Flex bg={'white'} minW={'400px'} w={[null, '100%','25vw']} h={'100vh'} flexDir={'column'} justifyContent={'space-evenly'} p={'2rem'}>
                    <Heading color={'primary.100'} display={[null, 'block', 'none']}>PUPSJ Student Organizations</Heading>
                    <VStack spacing={10}>
                        <VStack w={'100%'} alignItems={'left'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'} color={'black'}>Student ID</Text>
                            <InputGroup>
                                <InputLeftAddon pr={'10px'} pointerEvents={'none'} children={<FontAwesomeIcon icon={faUser} fill={'#333333'}/>}/>
                                <Input variant={'outline'} focusBorderColor={'primary.100'}/>
                            </InputGroup>
                        </VStack>
                        <VStack  w={'100%'} alignItems={'left'}>
                            <Text fontSize={'xl'} fontWeight={'semibold'} color={'black'}>Password</Text>
                            <InputGroup>
                            <InputLeftAddon children={<FontAwesomeIcon icon={faLock} fill={'#333333'}/>}/>
                            <Input variant={'outline'} focusBorderColor={'primary.100'}/>
                            </InputGroup>
                        </VStack>
                    </VStack>
                    <VStack spacing={'6'} alignItems={'left'}>
                    <Link href={'/'}><Button colorScheme={'red'} w={'100%'}> Continue </Button></Link>
                        <Button variant={'ghost'} color={'primary.100'} fontSize={'md'}>Forgot password?</Button>
                    </VStack>
                </Flex>
            </Flex>
        </>
    )
}