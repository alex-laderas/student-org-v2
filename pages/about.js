import { Box, Container, Heading, HStack, Button, VStack, Stack, Text, Icon, Flex, Spacer} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";

import NavMain from "../layout/NavMain";
import AboutBox from "../layout/AboutBox";


export default function About() {
    return (
        <>
        <NavMain>
            <Container display={'flex'} h={'100%'} flexDir='column' justifyContent={'center'} py={'2rem'} mt='4rem' mb={'6rem'} overflow={'hidden'} mx='10rem'>
                <Heading size='4xl' fontWeight='bold' color='yellow.200' textTransform='uppercase' mt={'-24rem'}>Student Assembly</Heading>
            </Container>
        </NavMain>
        <Flex flexDir={'column'} w={'100vw'} bg={'black'} pt={'2rem'} px={'4rem'}>
            <Flex bgGradient={'linear(to-l, rgba(0, 0, 0, 0,), rgba(0, 0, 0, 1))'} py={'2rem'} justifyContent={[null, 'center', 'left']}>
                <Box border={'2px'} maxW={'500px'} borderColor={'secondary.100'} borderRadius={'12px'} p={'2rem'} bg={'primary.100'}>
                    <HStack mt={'-10px'}>
                        <Text fontSize={'md'} fontWeight={'bold'} color={'secondary.100'}>Mission</Text>
                        <Spacer/>
                        <Image src='/mission-icon.png' width={25} height={25} />
                    </HStack>
                    <Text color={'secondary.100'} mt={'10px'}>
                    Ensuring inclusive and equitable quality education and promoting lifelog learning opportunities through a re-engineered polytechnic university by committing to: provide democratized access to educational opportunities for the holistic development of individuals with global perspective; offer industry-oriented curricula that produce highly-skilled professinals wwith managerial and technical capabilities and a strong sense of public service for nation building;emged a culture of reasearch and innovation
                    </Text>
                </Box>
            </Flex>
            <Flex flexDir={'row'} bgGradient={'linear(to-l, rgba(0, 0, 0, 0,), rgba(0, 0, 0, 1))'} py={'2rem'} justifyContent={[null, 'center', 'right']}>
                <Box border={'2px'} maxW={'500px'} borderColor={'secondary.100'} borderRadius={'12px'} p={'2rem'} bg={'primary.100'}>
                    <HStack mt={'-10px'}>
                        <Text fontSize={'md'} fontWeight={'bold'} color={'secondary.100'}>Philosophy</Text>
                        <Spacer/>
                        <Image src='/philosophy-icon.png' width={25} height={25} />
                    </HStack>
                    <Text color={'secondary.100'} mt={'10px'}>
                    Ensuring inclusive and equitable quality education and promoting lifelog learning opportunities through a re-engineered polytechnic university by committing to: provide democratized access to educational opportunities for the holistic development of individuals with global perspective; offer industry-oriented curricula that produce highly-skilled professinals wwith managerial and technical capabilities and a strong sense of public service for nation building;emged a culture of reasearch and innovation
                    </Text>
                </Box>
            </Flex>
            <Flex bgGradient={'linear(to-l, rgba(0, 0, 0, 0,), rgba(0, 0, 0, 1))'} py={'2rem'} justifyContent={[null, 'center', 'left']}>
                <Box border={'2px'} maxW={'500px'} borderColor={'secondary.100'} borderRadius={'12px'} p={'2rem'} bg={'primary.100'}>
                    <HStack mt={'-10px'}>
                        <Text fontSize={'md'} fontWeight={'bold'} color={'secondary.100'}>Vision</Text>
                        <Spacer/>
                        <Image src='/vision-icon.png' width={25} height={25} />
                    </HStack>
                    <Text color={'secondary.100'} mt={'10px'}>
                    Ensuring inclusive and equitable quality education and promoting lifelog learning opportunities through a re-engineered polytechnic university by committing to: provide democratized access to educational opportunities for the holistic development of individuals with global perspective; offer industry-oriented curricula that produce highly-skilled professinals wwith managerial and technical capabilities and a strong sense of public service for nation building;emged a culture of reasearch and innovation
                    </Text>
                </Box>
            </Flex>
        </Flex>
        </>
    )
}