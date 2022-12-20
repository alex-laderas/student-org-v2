import { Box, Container, Heading, HStack, Button, VStack, Stack} from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

import NavMain from "../layout/NavMain";

export default function Home() {
  return (
    <NavMain>
      <Container display='flex' flexDir='column' mt='-4rem' mx='6rem' w={'100vw'} justifyContent='center' h='full'>
        <VStack display='flex' flexDir='column' alignItems='left'>
          <Heading size='4xl' fontWeight='bold' color='yellow.200' textTransform='uppercase'>Student Assembly</Heading>
          <Heading as='h2' textShadow='0px 4px 4px#000000' size='md' color='white' fontWeight='medium' m='0' p='0'>Polytechnic University of the Philippines</Heading>
          <Heading as='h2' textShadow='0px 4px 4px#000000' size='md' color='white' fontWeight='medium' m='0' p='0'>San Juan Campus</Heading>
          <Heading as='h2' size='sm' color='white' fontWeight='small' m='0' p='0'>2008 - Present</Heading>
        </VStack>
        
        <Box py='20px'/>

        <Button variant='link' fontSize='lg' color='red.600' w='fit-content'><Link href={'/about'}>Read More</Link></Button>
        
        <Box py='10px'/>

        <Button leftIcon={<FontAwesomeIcon icon={faCalendarWeek} size='2x' color="#888"/>} px='1rem' py='36px' pl='24px' variant='outline' justifyContent='left'>
          <Stack justifyContent='left' ml='4px'>
            <Heading as='h2' size='md' color='gray.500'>Student Assembly Orientation</Heading>
            <Heading as='h3' size='sm' color='gray.400' textAlign='left'>September 30, 2022 @ 2:00PM</Heading>
          </Stack>
          
        </Button>
      </Container>
    </NavMain>
  )
}
