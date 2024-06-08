import { Box, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./index.css";

import Form from "@/component/molecule/Form";

const FormLayer: FC<{ onClose: () => void }> = ({ onClose }) => {
  const methods = useForm();

  useEffect(() => {
    window.document.body.style.top = `-${window.scrollY}px`;
    window.document.body.style.position = "fixed";
    return () => {
      window.document.body.style.position = "";
      window.scrollTo(0, parseInt(window.document.body.style.top || "0") * -1);
      window.document.body.style.top = "";
    };
  }, []);

  return (
    <Box
      backgroundColor="white"
      height="100vh"
      left="0"
      padding="10px"
      position="fixed"
      top="0"
      width="100%"
      zIndex="999"
    >
      <Box as="header" left="0" padding="20px" textAlign="center">
        TITLE
      </Box>
      <Box as="main">
        <FormProvider {...methods}>
          <Form>
            <Form.Field name="id">
              <Form.Textarea minHeight="400px" resize="none" width="100%" />
            </Form.Field>
          </Form>
        </FormProvider>
      </Box>
      <Box as="footer" display="flex">
        <Button flexBasis="50%" height="50px" width="100%">
          sadad
        </Button>
        <Button flexBasis="50%" flexGrow="1" onClick={onClose}>
          X
        </Button>
      </Box>
    </Box>
  );
};

const Users: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        borderRadius="50%"
        bottom="20px"
        onClick={onOpen}
        padding="20px"
        position="fixed"
        right="20px"
      >
        asdasdsa
      </Button>
      {isOpen && <FormLayer onClose={onClose} />}
    </Box>
  );
};

export default Users;
