import {
  Button,
  Flex,
  Spinner,
  Switch,
  Table,
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

import FormSearchUser from "@/component/organism/FormSearchUser";
import useTodoListQuery from "@/hook/queries/useTodoListQuery";

const Home: FC = () => {
  const { data: todoList } = useTodoListQuery();

  return (
    <Flex flexDirection="column" gap="20px">
      <FormSearchUser />
      <TableContainer
        border="1px solid #e4e4e4"
        borderRadius="10px"
        flexGrow="1"
      >
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th width="10%">No.</Th>
              <Th>userId</Th>
              <Th>title</Th>
              <Th>completed</Th>
            </Tr>
          </Thead>
          <Tbody display="block">
            {todoList ? (
              todoList.map(({ id, userId, title, completed }, index) => {
                return (
                  <Tr
                    key={id}
                    _hover={{
                      fontWeight: "bold",
                    }}
                    cursor="pointer"
                  >
                    <Td width="10%">{index}</Td>
                    <Td>{userId}</Td>
                    <Td>{title}</Td>
                    <Td>
                      <Switch checked={completed} />
                    </Td>
                  </Tr>
                );
              })
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
                  <Button disabled>다음</Button>
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
