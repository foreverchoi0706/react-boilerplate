import {
  Button,
  Flex,
  Spinner,
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
import { Link } from "react-router-dom";

import FormSearchUser from "@/component/organism/FormSearchUser";
import useUserListQuery from "@/hook/queries/useUserListQuery";

const Home: FC = () => {
  const { data: userList } = useUserListQuery();

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
              <Th>이름</Th>
              <Th>아이디</Th>
              <Th>웹사이트</Th>
              <Th>이메일</Th>
              <Th>휴대전화</Th>
              <Th width="10%">버튼</Th>
            </Tr>
          </Thead>
          <Tbody display="block">
            {userList ? (
              userList.map(
                ({ id, name, website, email, phone, username }, index) => (
                  <Tr key={id}>
                    <Td width="10%">{index}</Td>
                    <Td>{name}</Td>
                    <Td>{username}</Td>
                    <Td>{website}</Td>
                    <Td>{email}</Td>
                    <Td>{phone}</Td>
                    <Td width="10%">
                      <Link to={`/user/${index}`}>
                        <Button size="sm">상세</Button>
                      </Link>
                    </Td>
                  </Tr>
                )
              )
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
