import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Box, Button, Flex, Heading, ScaleFade, Table, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import NavProfile from "../../layout/NavProfile";



export default function Profile() {
    return (
        <>
            <Heading my={'auto'} color={'blackAlpha.700'} >
                Select a tab from above..
            </Heading>
        </>
    )
}

Profile.Layout = NavProfile;