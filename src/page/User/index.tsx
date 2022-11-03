import {
  Button,
  Flex,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Link } from "react-router-dom";

import FormSearch from "@/component/organism/FormSearchUser";
import useCardsQuery from "@/hook/queries/useCardsQuery";
import useQueryString from "@/hook/useQueryString";
import { TFormSearchUser } from "@/type/search";

const Home: FC = () => {
  const { queryString } = useQueryString<TFormSearchUser>();
  const { data: cards } = useCardsQuery(queryString);

  return (
    <Flex flexDirection="column" height="100vh" padding="20px">
      <FormSearch />
      <TableContainer
        border="1px solid #e4e4e4"
        borderRadius="10px"
        flexGrow="1"
        marginTop="40px"
        overflowY="scroll"
      >
        <Table variant="striped" width="100%">
          <TableCaption>USER</TableCaption>
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
          <Tfoot>
            <Tr>
              <Td colSpan={999}>
                <Flex alignItems="center" gap="20px" justifyContent="center">
                  <Button disabled>이전</Button>
                  <Text as="strong">1/1</Text>
                  <Button>다음</Button>
                </Flex>
              </Td>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default Home;
