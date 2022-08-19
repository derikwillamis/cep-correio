import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";

import { Container } from "./styles";
import Foolter from "../../Components/Foolter";
import Header from "../../Components/Header";
import UserContext from "../../hooks/context";
import { returnSelecionados } from "../../helper/ConverterEstados";
import ImagemFinal from "../../assets/icons/palminha.png";

const Finish: React.FC = () => {
  const { dados } = useContext(UserContext);

  return (
    <>
      <Header />
      <Container>
        <strong>Parabéns {dados.nome.split(" ")[0]},</strong>

        <Flex>
          <Image
            w="8"
            objectFit="cover"
            src={ImagemFinal}
            alt="Segun Adebayo"
          />
          <Text>
            Voce deu o primeiro passo rumo a organização gerencial do seu
            negócio.
          </Text>
        </Flex>
        <Text style={{ width: "50%" }}>
          Nos do <strong>meu delivery</strong>, estamos muito felizes em fazer
          parte parte dessa história Lembre-se estaremos aqui para oq precisar
        </Text>
        <section>
          <strong>Nome: {dados.nome}</strong>
          <strong>Telefone: {dados.telefone}</strong>
          <strong>Email: {dados.email}</strong>
          <strong>
            Endereço: {dados.endereço}, {dados.numero}, {dados.complemento},{" "}
            {dados.cidade} - {dados.estado}
          </strong>{" "}
          <br />
          <strong>Os selecionados foram : </strong>
          {dados.checked.map((selecionados, index) =>
            selecionados ? (
              <ul>
                <li>
                  <strong>{returnSelecionados(selecionados, index)}</strong>
                </li>
              </ul>
            ) : null
          )}
        </section>
      </Container>
      <Foolter />
    </>
  );
};

export default Finish;
