import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { Grid, Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

const Foolter: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const handleNextPage = async () => {
    if (location.pathname === "/selecione") {
      history.push("/finish");
    } else {
      history.push("/selecione");
    }
  };

  return (
    <Container>
      <Grid templateColumns="repeat(7, 1fr)">
        <Box w="100%" h="1" bg="#ffe311" />
        <Box w="100%" h="1" bg="#ff5111" />
        <Box w="100%" h="1" bg="#7811ff" />
        <Box w="100%" h="1" bg="#ffaf47" />
        <Box w="100%" h="1" bg="#1188ff" />
        <Box w="100%" h="1" bg="#1dff11" />
        <Box w="100%" h="1" bg="#000000" />
      </Grid>
      <Flex
        h="250"
        bg="#61ffc0"
        templateColumns="repeat(2, 1fr)"
        justifyContent="space-between"
        p="20"
        alignItems="center"
      >
        {location.pathname === "/selecione" ? (
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="gray"
            variant="solid"
            onClick={() => history.goBack()}
            width="280"
          >
            Voltar
          </Button>
        ) : (
          <div></div>
        )}
        {location.pathname === "/finish" ? (
          <div></div>
        ) : (
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="gray"
            variant="solid"
            width="280"
            onClick={handleNextPage}
          >
            Continue
          </Button>
        )}
      </Flex>
    </Container>
  );
};

export default Foolter;
