import { Box, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Form from "@/component/molecule/Form";

const FormLayer: FC<{ onClose: () => void }> = ({ onClose }) => {
  const methods = useForm();
  return (
    <Box
      backgroundColor="white"
      padding="20px"
      position="fixed"
      top="0"
      width="100vw"
      zIndex={999}
    >
      <Box as="header" height="50px" position="fixed" top="0" width="100%">
        TITLE
        <Button onClick={onClose}>X</Button>
      </Box>
      <Box as="body" position="fixed" top="50px" width="100%">
        <FormProvider {...methods}>
          <Form>
            <Form.Field name="id">
              <Form.Label>TEST</Form.Label>
              <Form.Textarea minHeight="400px" resize="none" width="100%" />
            </Form.Field>
          </Form>
        </FormProvider>
      </Box>
      <Box as="footer" position="fixed" top="500px" width="100%">
        <Button height="50px" width="100%">
          sadad
        </Button>
      </Box>
    </Box>
  );
};

const Users: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      dasdad
      <Button onClick={onOpen}>asdasdsa</Button>
      {isOpen && <FormLayer onClose={onClose} />}
    </Box>
  );
};

export default Users;
