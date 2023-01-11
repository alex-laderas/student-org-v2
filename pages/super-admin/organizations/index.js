import { Heading, Table, Tbody, Td, Thead, Tr } from "@chakra-ui/react";

import NavSuperAdmin from "../../../layout/NavSuperAdmin";
import AdminOrg from "../../../layout/AdminOrg";

export default function Organization() {
    return (
        <>
            <AdminOrg>
                <Table px={'2rem'} variant={'striped'} maxW={'1300px'} mx={'auto'}>
                    <Thead>
                        <Tr color={'red'} fontWeight={'semibold'}>
                            <Td>Date</Td>
                            <Td>Organization Name</Td>
                            <Td>Event Name</Td>
                            <Td>Status</Td>
                            <Td>Report Status</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1-1-22</Td>
                            <Td>GLITCH</Td>
                            <Td>Webinar: The Future of PUPSJ Programmers</Td>
                            <Td>Finished</Td>
                            <Td>Done</Td>
                        </Tr>
                        <Tr>
                            <Td>1-4-22</Td>
                            <Td>JPIA</Td>
                            <Td>Webinar</Td>
                            <Td>On-going</Td>
                            <Td>---</Td>
                        </Tr>
                        <Tr>
                            <Td>1-5-22</Td>
                            <Td>PSO</Td>
                            <Td>Webinar</Td>
                            <Td>Pending</Td>
                            <Td>---</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </AdminOrg>
        </>
    )
}

Organization.Layout = NavSuperAdmin;