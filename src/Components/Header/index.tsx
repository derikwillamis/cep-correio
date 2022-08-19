import { Grid, GridItem, Image, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { Container } from "./styles";
import Logo from "../../assets/icons/logo.png";
const Header: React.FC = () => {
  return (
    <Container>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={12}
        alignItems="center"
        w="100%"
      >
        <Image
          bpxoxSize="100px"
          h="80px"
          objectFit="cover"
          src={Logo}
          alt="Segun Adebayo"
        />
        <GridItem
          display="flex"
          h="10"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Text color="#1440e1" fontWeight="bold" fontSize="sm">
            Está com alguma dúvida de cadastro?
          </Text>
          <Text color="#1440e1" fontSize="sm">
            ﾠfale com nossa equipe, estamos sempre aqui para te ajudar!
          </Text>
        </GridItem>
      </Grid>
      <Divider />
    </Container>
  );
};

export default Header;
