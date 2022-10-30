import {
  Box,
  Button,
  Spinner,
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
import { Link } from "react-router-dom";

import FormSearch from "@/component/organism/FormSearch";
import useCardsQuery from "@/hook/queries/useCardsQuery";

const Home: FC = () => {
  const { data: cards } = useCardsQuery();

  return (
    <Box>
      <FormSearch />
      <TableContainer
        border="1px solid #e4e4e4"
        borderRadius="10px"
        marginTop="40px"
      >
        <Table variant="striped" width="100%">
          <TableCaption>HOME</TableCaption>
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
            {cards ? (
              cards.map((card, index) => (
                <Tr key={index}>
                  <Td>{index}</Td>
                  <Td>{card}</Td>
                  <Td>{card}</Td>
                  <Td>{card}</Td>
                  <Td>{card}</Td>
                  <Td>{card}</Td>
                  <Td>
                    <Link to={`/user/${index}`}>
                      <Button size="sm">상세</Button>
                    </Link>
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={999} textAlign="center">
                  <Spinner />
                </Td>
              </Tr>
            )}
          </Tbody>
          <Tfoot />
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
