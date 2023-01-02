import { Box, Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./index.css";

import Form from "@/component/molecule/Form";

const FormLayer: FC<{ onClose: () => void }> = ({ onClose }) => {
  const methods = useForm();

  useEffect(() => {
    window.document.body.style.position = "fixed";
    // window.document.body.style.top = `-${window.scrollY}px`;

    return () => {
      window.document.body.style.position = "static";
      // window.document.body.style.top = "";
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
    >
      <Box as="header" height="50px" left="0" textAlign="center">
        TITLE
        <Button onClick={onClose}>X</Button>
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
      <Box as="footer">
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic minima
      quo, magnam illum nulla eos suscipit ab. Facere culpa veritatis, maiores
      nihil cupiditate ipsam ea sed repudiandae possimus eaque! Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Alias hic minima quo, magnam
      illum nulla eos suscipit ab. Facere culpa veritatis, maiores nihil
      cupiditate ipsam ea sed repudiandae possimus eaque! Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Alias hic minima quo, magnam illum
      nulla eos suscipit ab. Facere culpa veritatis, maiores nihil cupiditate
      ipsam ea sed repudiandae possimus eaque! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Alias hic minima quo, magnam illum nulla eos
      suscipit ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque! Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Alias hic minima quo, magnam illum nulla eos suscipit
      ab. Facere culpa veritatis, maiores nihil cupiditate ipsam ea sed
      repudiandae possimus eaque!
    </Box>
  );
};

export default Users;
