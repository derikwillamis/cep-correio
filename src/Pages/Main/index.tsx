import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import api from "../../service/api";
import {
  ConverterEstados,
  mCEP,
  tirarFormatCep,
} from "../../helper/ConverterEstados";

import { Container } from "./styles";
import Foolter from "../../Components/Foolter";
import Header from "../../Components/Header";
import UserContext from "../../hooks/context";

const MainPage: React.FC = () => {
  const toast = useToast();
  const [mostrarCampos, setMostrarCampos] = useState(false);
  const [show, setShow] = useState(false);

  const { setDados, dados } = useContext(UserContext);

  const handleClick = () => setShow(!show);

  const buscaCep = async (cep: string) => {
    try {
      const response = await api.get(`/${tirarFormatCep(cep)}/json/unicode/`);
      setDados({
        ...dados,
        cep: cep,
        endereço: response.data.logradouro,
        estado: String(ConverterEstados(response.data.uf)),
        cidade: response.data.localidade,
      });
      setMostrarCampos(true);

      if (response.data.erro) {
        toast({
          title: "Error.",
          description: "CEP não encontrado.",
          status: "error",
          duration: 2000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        toast({
          title: "Sucesso.",
          description: "CEP encontrado com sucesso.",
          status: "success",
          duration: 2000,
          position: "top-right",
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao buscar cep.",
        description: "Tente novamente mais tarde.",
        status: "error",
        duration: 2000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  const handleChange = (event: {
    target: { value: React.SetStateAction<string>; name: string };
  }) => {
    let nome = event.target.name;
    setDados({ ...dados, [nome]: event.target.value });
    if (dados.cep.length === 9 && nome === "cep") {
      buscaCep(String(event.target.value));
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Text fontSize="12px">
          <strong>Bem vindo ao meu delivery</strong>
        </Text>
        <Text fontSize="12px">
          UM <strong>SISTEMA DE GESTÃO COMPLETO</strong> PARA O SEU
          ESTABELECIMENTO
        </Text>
        <section>
          <strong>Qual nome da sua empresa?</strong>
          <Input
            value={dados.nome}
            name="nome"
            onChange={handleChange}
            size="sm"
          />

          <strong>Qual seu e-mai?</strong>
          <Input
            value={dados.email}
            name="email"
            onChange={handleChange}
            size="sm"
            type="email"
          />

          <strong>Telefone</strong>
          <Input
            value={mCEP(dados.telefone)}
            name="telefone"
            onChange={handleChange}
            size="sm"
          />

          <strong>Senha</strong>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              value={dados.senha}
              type={show ? "text" : "password"}
              name="senha"
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Esconder" : "Mostrar"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <strong>Cep</strong>
          <Input
            value={mCEP(dados.cep)}
            name="cep"
            onChange={handleChange}
            size="sm"
          />
          {mostrarCampos ? (
            <>
              <strong>Endereço</strong>
              <Input
                value={dados.endereço}
                name="cep"
                onChange={handleChange}
                size="sm"
              />

              <strong>Numero</strong>
              <Input
                value={dados.numero}
                name="numero"
                onChange={handleChange}
                size="sm"
              />
              <strong>Complemento</strong>
              <Input
                value={dados.complemento}
                name="complemento"
                onChange={handleChange}
                size="sm"
              />

              <strong>Estado</strong>
              <Input
                value={dados.estado}
                name="cep"
                onChange={handleChange}
                size="sm"
              />

              <strong>Cidade</strong>
              <Input
                value={dados.cidade}
                name="cep"
                onChange={handleChange}
                size="sm"
              />
            </>
          ) : null}
        </section>
      </Container>
      <Foolter />
    </>
  );
};

export default MainPage;
