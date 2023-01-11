import { Button, Container, Flex, Heading, Radio, RadioGroup, VStack } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Survey() {
    return(
        <>
            <Flex w={'100vw'} h={'100vh'} flexDir={'column'}>
                <Flex h={'200px'} w={'full'} bg={'teal.600'} p={'1rem'}>
                    <Link href={'/'}>
                        <Button colorScheme={'whiteAlpha'}>
                            <FontAwesomeIcon icon={faHouse}/>
                        </Button>
                    </Link>
                    <Heading mx={'1rem'} fontSize={'3xl'} color={'CaptionText'}>Survey/Evaluation Form</Heading>
                </Flex>
                <Flex p={'2rem'} w={'full'} h={'full'} justifyContent={'flex-start'} flexDir={'column'}>
                    <Container display={'flex'} flexDir={'column'} justifyContent={'flex-start'}>
                        <Heading fontSize={'md'}>1. Overall, how would you rate the event?</Heading>
                        <RadioGroup p={'1rem'} defaultValue={null}>
                            <VStack alignItems={'left'}>
                                <Radio value={'excellent'}>Excellent</Radio>
                                <Radio value={'very good'}>Very Good</Radio>
                                <Radio value={'good'}>Good</Radio>
                                <Radio value={'fair'}>Fair</Radio>
                                <Radio value={'poor'}>Poor</Radio>
                            </VStack>
                        </RadioGroup>
                    </Container>
                </Flex>
                <Flex w={'full'} p={'1rem'} justifyContent={'flex-end'}>
                    <Button>Submit</Button>
                </Flex>
            </Flex>
        </>
    )
}