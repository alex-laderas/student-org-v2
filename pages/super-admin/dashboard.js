import { Box, Button, Flex, Heading, HStack, SimpleGrid, Stat, StatArrow, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

import NavSuperAdmin from "../../layout/NavSuperAdmin";



export default function Dashboard(){
    return (
        <>
            <Flex w={'90vw'} bg={'white'} flexDir={'column'} justifyContent={'center'} p={'2rem'}>
                <HStack>
                    <Heading color={'red'} mx={'2rem'}>Reports</Heading>
                    <Button variant={'solid'} colorScheme={'red'}>Download</Button>
                </HStack>
                <SimpleGrid columns={[null, 1, 3]} spacing={'10'} m={'2rem'} justifyContent={'space-evenly'}>
                    <Box borderRadius={'12px'} bg={'blackAlpha.100'} p={'1rem'} w={'full'}>
                        <Stat>
                            <StatLabel>Page Visits</StatLabel>
                            <StatNumber>
                                <StatArrow type="increase"/>
                                0
                            </StatNumber>
                            <StatHelpText>Number of page visits from users this month</StatHelpText>
                        </Stat>
                    </Box>
                    <Box borderRadius={'12px'} bg={'blackAlpha.100'} p={'1rem'} w={'full'}>
                        <Stat>
                            <StatLabel>Downloaded Reports</StatLabel>
                            <StatNumber>
                                <StatArrow type="increase"/>
                                0
                            </StatNumber>
                            <StatHelpText>Total reports downloaded this month</StatHelpText>
                        </Stat>
                    </Box>
                    <Box borderRadius={'12px'} bg={'blackAlpha.100'} p={'1rem'} w={'full'}>
                        <Stat>
                            <StatLabel>Accomplishment Reports</StatLabel>
                            <StatNumber>
                                <StatArrow type="increase"/>
                                0
                            </StatNumber>
                            <StatHelpText>Total number of accomplishments users have</StatHelpText>
                        </Stat>
                    </Box>
                    <Box borderRadius={'12px'} bg={'blackAlpha.100'} p={'1rem'} w={'full'}>
                        <Stat>
                            <StatLabel>Number of Events</StatLabel>
                            <StatNumber>
                                <StatArrow type="increase"/>
                                0
                            </StatNumber>
                            <StatHelpText>Total number of events this month</StatHelpText>
                        </Stat>
                    </Box>
                    <Box borderRadius={'12px'} bg={'blackAlpha.100'} p={'1rem'} w={'full'}>
                        <Stat>
                            <StatLabel>Finished Events</StatLabel>
                            <StatNumber>
                                <StatArrow type="increase"/>
                                0
                            </StatNumber>
                            <StatHelpText>Total number of successful events this month</StatHelpText>
                        </Stat>
                    </Box>
                    <Box borderRadius={'12px'} bg={'blackAlpha.100'} p={'1rem'} w={'full'}>
                        <Stat>
                            <StatLabel>On-going Events</StatLabel>
                            <StatNumber>
                                <StatArrow type="increase"/>
                                0
                            </StatNumber>
                            <StatHelpText>Pending number of unfinished events this month</StatHelpText>
                        </Stat>
                    </Box>
                </SimpleGrid>
            </Flex>
        </>
    )
}

Dashboard.Layout = NavSuperAdmin;