import { Box, Container, Heading, HStack, Button, VStack, Stack, Progress, Flex, SlideFade} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { motion } from "framer-motion"

import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faUsersBetweenLines } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

export default function NavMain({children}) {

  const [scrollProgress, setScrollProgress] = useState(0)
  const [navReveal, setNavReveal] = useState(false)

    useEffect(() => {
      let progressBarHandler = () => {
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = `${totalScroll / windowHeight}`;

          setScrollProgress(scroll);
      }

      window.addEventListener("scroll", progressBarHandler);
      console.log(scrollProgress);
      return () => window.removeEventListener("scroll", progressBarHandler);
    },[scrollProgress])

    return (
        <>
          <Box position={"sticky"} top={0} zIndex={4}>
            <Progress value={scrollProgress * 100} size={'sm'} colorScheme={'red'}/>
          </Box>
          <Box position={'relative'} flexDir='row' width='99.99vw' h='99vh' m='0' p='0' bg='black' overflow='hidden' zIndex='2'>
          <Box mt={'-8px'} bgImage='/pupBG.jpeg' transform={'auto'} translateY={scrollProgress * 100} scale={1.1 + -(scrollProgress * 12) / 100} transitionDuration={'0.2s'} transitionDelay={'0.01s'} transitionTimingFunction={'ease-out'} height='100%' w='100vw' position='absolute' justifyContent={'space-between'} backgroundRepeat='no-repeat' backgroundSize='cover' opacity={0.3} filter='blur(1px)' zIndex='-1'/>
          <HStack h='80px' w='100%' justifyContent='space-between' py='2.8rem' px='4rem'>
          <Heading color='yellow.200' textShadow='4px 4px #000000'><Link href={'/'}>PUPSJ</Link></Heading>
          <HStack m='0' p='0'>
            
            <Link href={'/events'} scroll={false} >
              <Button role={'group'} color='white' colorScheme='whiteAlpha' variant='ghost' size='lg'>
                <Container _groupHover={{ display: 'block' }} px={'6px'} display='none'>
                    <FontAwesomeIcon icon={faCalendar}/>
                </Container>
                Events
              </Button>
            </Link>
            <Link href={'/organizations'} scroll={false} >
              <Button role={'group'} color='white' colorScheme='whiteAlpha' variant='ghost' size='lg'>
                <Container _groupHover={{ display: 'block' }} px={'6px'} display='none'>
                  <FontAwesomeIcon icon={faUsersBetweenLines} />
                </Container>
                Organizations
              </Button>
            </Link>
          </HStack>
          <Link href={'/login'} ><Button px='1.6rem' bg='yellow.200' colorScheme='yellow'>Login</Button></Link>
        </HStack>
          <Box display={'flex'} position={'absolute'} bottom='0' flexDir='column' w={'100%'} mb={'-11rem'}>
              <Box display={'flex'} bgGradient='linear(to-t, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' pt={'20vh'} w={'100%'}/>
              <Box display={'flex'}  bgGradient='linear(to-t, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))' pb={'20vh'} w={'100%'}/>
          </Box>
        {children}
          </Box>
        
        </>
    )
}