import { Box, Container, Heading, HStack, Button, VStack, Stack, Progress, ScaleFade} from "@chakra-ui/react";
import { Divider, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { useEffect, useState } from "react";


export default function NavProfile({children}) {

    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
      let progressBarHandler = () => {
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = `${totalScroll / windowHeight}`;

          setScrollProgress(scroll);
      }

      window.addEventListener("scroll", progressBarHandler);

      return () => window.removeEventListener("scroll", progressBarHandler);
    },[scrollProgress])

    return (
        <>
            <Box pos={'sticky'} top={0} zIndex={4}>
                <Progress value={scrollProgress * 100} size={'sm'} colorScheme={'red'}/>
            </Box>
            <Box position={'relative'} flexDir='row' width='100vw' h='60vh' m='0' p='0' bg='black' overflow='hidden' zIndex='2'>
            <Box mt={'-8px'} bgImage='/pupBG.jpeg' transform={'auto'} translateY={scrollProgress * 100} scale={1.5 + -(scrollProgress * 12) / 100} transitionDuration={'0.2s'} transitionTimingFunction={'ease-out'} height='100%' w='100vw' position='absolute' justifyContent={'space-between'} backgroundRepeat='no-repeat' backgroundSize='cover' opacity={0.3} filter='blur(1px)' zIndex='-1'/>
            <HStack h='80px' w='100%' justifyContent='space-between' py='2.8rem' px='4rem'>
            <Heading color='yellow.200' textShadow='4px 4px #000000'><Link href={'/'}>PUPSJ</Link></Heading>
            <HStack m='0' p='0'>
                <Link href={'/events'}><Button color='white' colorScheme='whiteAlpha' variant='ghost' size='lg'>Events</Button></Link>
                <Link href={'/organizations'}><Button color='white' colorScheme='whiteAlpha' variant='ghost' size='lg'>Organizations</Button></Link>
            </HStack>
            <Link href={'/login'}><Button px='1.6rem' bg='yellow.200' colorScheme='yellow'>Login</Button></Link>
            </HStack>
            <Flex flexDir={'column'} justifyContent={'center'} h={'100%'} mt={'-8rem'}>
                <ScaleFade in={true} initialScale={0.4}>
                    <Heading as={'h1'} size={'2xl'} color={'white'} m={'auto'} textAlign={'center'}>Personal Information</Heading>
                </ScaleFade>
            </Flex>
            
            <Box display={'flex'} position={'absolute'} bottom='0' flexDir='column' w={'100%'} mb={'-11rem'}>
                <Box display={'flex'} bgGradient='linear(to-t, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' pt={'20vh'} w={'100%'}/>
                <Box display={'flex'}  bgGradient='linear(to-t, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))' pb={'20vh'} w={'100%'}/>
            </Box>
            </Box>
            <Flex flexDir={'column'} alignItems={'center'} bg={'blackAlpha.100'} >
                <HStack display={'flex'} p={'1rem'} bg={'white'} m={'2rem'} w={'75%'} minW={'660px'} justifyContent={'space-evenly'} boxShadow={'0px 2px 1px 2px rgba(0, 0, 0, .4)'} >
                    <Box w={'full'}>
                        <Link href={'/profile/myprofile'} scroll={false}>
                            <Button size={'lg'} w={'100%'} variant={'ghost'}>Profile</Button>
                        </Link>
                    </Box>
                    <Divider variant={'thick'} h={'100%'} colorScheme={'gray'} orientation="vertical" />
                    <Box w={'full'}>
                        <Link href={'/profile/organizations'} scroll={false}>
                            <Button size={'lg'} w={'100%'} variant={'ghost'}>Organizations</Button>
                        </Link>
                    </Box>
                    <Divider orientation="vertical" />
                    <Box w={'full'}>
                        <Link href={'/profile/events'} scroll={false}>
                            <Button size={'lg'} w={'100%'} variant={'ghost'}>Events</Button>
                        </Link>
                    </Box>
                    <Divider orientation="vertical" />
                    <Box w={'full'}>
                        <Link href={'/profile/accomplishments'} scroll={false}>
                            <Button size={'lg'} w={'100%'} variant={'ghost'}>Accomplishments</Button>
                        </Link>
                    </Box>
                </HStack>
            {children}
            </Flex>
        </>
    )
}