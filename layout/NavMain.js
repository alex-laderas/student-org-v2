import { Box, Container, Heading, HStack, Button, VStack, Stack} from "@chakra-ui/react";
import Link from "next/link";

export default function NavMain({children}) {
    return (
        <>
          <Box bgImage='/pupBG.jpeg' height='100%' w='100vw' position='absolute' justifyContent={'space-between'} backgroundRepeat='no-repeat' backgroundSize='cover' filter='blur(1px)' zIndex='-1'/>
          <Box position={'relative'} flexDir='row' width='100vw' h='100vh' m='0' p='0' bg='blackAlpha.700' overflow='hidden' zIndex='2'>
          <HStack h='80px' w='100%' justifyContent='space-between' py='2.8rem' px='4rem'>
          <Heading color='yellow.200' textShadow='4px 4px #000000'><Link href={'/'}>PUPSJ</Link></Heading>
          <HStack m='0' p='0'>
            <Button color='white' colorScheme='whiteAlpha' variant='ghost' size='lg'>Catalog</Button>
            <Link href={'/events'}><Button color='white' colorScheme='whiteAlpha' variant='ghost' size='lg'>Events</Button></Link>
            <Link href={'/organizations'}><Button color='white' colorScheme='whiteAlpha' variant='ghost' size='lg'>Organizations</Button></Link>
          </HStack>
          <Link href={'/login'}><Button px='1.6rem' bg='yellow.200' colorScheme='yellow'>Login</Button></Link>
        </HStack>
        {children}
          <Box display={'flex'} position={'absolute'} bottom='0' flexDir='column' w={'100%'} mb={'-10rem'}>
              <Box display={'flex'} bgGradient='linear(to-t, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' pt={'20vh'} w={'100%'}/>
              <Box display={'flex'}  bgGradient='linear(to-t, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))' pb={'20vh'} w={'100%'}/>
          </Box>
          </Box>
        
        </>
    )
}