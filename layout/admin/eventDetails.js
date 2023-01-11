import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Flex, Heading, Input, Text } from "@chakra-ui/react";



export default function EventDetails() {
    return (
        <>
            <Flex w={'100vw'} h={'100vh'} bg={'blackAlpha.600'} zIndex={10}>
                <Card pos={'absolute'} translateX={'50%'} translateY={'50%'} top={'50'} left={'50'}>
                    <CardHeader>
                        <Heading>Event Information</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Event Name</Text>
                        <Input />
                    </CardBody>
                </Card>
            </Flex>
        </>
    )
}