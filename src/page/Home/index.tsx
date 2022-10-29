import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { FC } from "react";

import FormSearch from "@/component/organism/FormSearch";

const Home: FC = () => {
  return (
    <Box>
      <FormSearch />
      <TableContainer
        border="1px solid #e4e4e4"
        borderRadius="10px"
        marginTop="40px"
      >
        <Table variant="striped" width="100%">
          <TableCaption>sad</TableCaption>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>이름</Th>
              <Th>아이디</Th>
              <Th>버튼</Th>
              <Th>이름</Th>
              <Th>아이디</Th>
              <Th>버튼</Th>
            </Tr>
          </Thead>
          <Tbody>
            {new Array(100).fill("").map((_, index) => (
              <Tr
                key={index}
                style={{
                  tableLayout: "fixed",
                }}
              >
                <Td>{index}</Td>
                <Td>asdds</Td>
                <Td>asdds</Td>
                <Td>asdds</Td>
                <Td>asdds</Td>
                <Td>asdds</Td>
                <Td>asdds</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot />
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
