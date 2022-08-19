import { Checkbox, Grid, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import Foolter from "../../Components/Foolter";
import Header from "../../Components/Header";
import UserContext from "../../hooks/context";
import { Container, DivCheckBox, Principal } from "./styles";

import GestorVendas from "../../assets/icons/porquinho.png";
import PedidosOnline from "../../assets/icons/pedido-online.png";
import RelatorioFinan from "../../assets/icons/grafico-de-barras-financeiro.png";
import ControleEstoque from "../../assets/icons/estoque.png";
import AppProprio from "../../assets/icons/order.png";
import EmisaoFiscal from "../../assets/icons/bill.png";
import IntergracaoIfood from "../../assets/icons/logo-ifood.png";
import GestaoMesas from "../../assets/icons/mesa-redonda.png";

const Select: React.FC = () => {
  const { setDados, dados } = useContext(UserContext);

  return (
    <>
      <Header />
      <Container>
        <Principal>
          <Text>
            <strong> Que Legal</strong>, nossa equipe adora comida japonesa,
            Nessa etapa iremos escolher o que você quer utilizar, Não se
            preocuope, caso queira alterar você pode a qualquer momento e
            melhor, <strong>não paga nada a mais por isso.</strong>
          </Text>
        </Principal>
        <Text>Escolha as opçoes que mais tem a ver com sua loja</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <DivCheckBox selected={dados.checked[0]}>
            <Checkbox
              colorScheme="blackAlpha"
              isChecked={dados.checked[0]}
              onChange={(e) =>
                setDados({
                  ...dados,
                  checked: [
                    e.target.checked,
                    dados.checked[1],
                    dados.checked[2],
                    dados.checked[3],
                    dados.checked[4],
                    dados.checked[5],
                    dados.checked[6],
                    dados.checked[7],
                  ],
                })
              }
            />
            <Image objectFit="cover" src={GestorVendas} alt="Segun Adebayo" />
            <Text align="center" fontSize="md">
              Gestor de vendas
            </Text>
          </DivCheckBox>
          <DivCheckBox selected={dados.checked[1]}>
            <Checkbox
              colorScheme="blackAlpha"
              isChecked={dados.checked[1]}
              onChange={(e) =>
                setDados({
                  ...dados,
                  checked: [
                    dados.checked[0],
                    e.target.checked,
                    dados.checked[2],
                    dados.checked[3],
                    dados.checked[4],
                    dados.checked[5],
                    dados.checked[6],
                    dados.checked[7],
                  ],
                })
              }
            />
            <Image objectFit="cover" src={PedidosOnline} alt="Segun Adebayo" />
            <Text align="center" fontSize="md">
              Pedidos Online
            </Text>
          </DivCheckBox>

          <DivCheckBox selected={dados.checked[2]}>
            <Checkbox
              colorScheme="blackAlpha"
              isChecked={dados.checked[2]}
              onChange={(e) =>
                setDados({
                  ...dados,
                  checked: [
                    dados.checked[0],
                    dados.checked[1],
                    e.target.checked,
                    dados.checked[3],
                    dados.checked[4],
                    dados.checked[5],
                    dados.checked[6],
                    dados.checked[7],
                  ],
                })
              }
            />
            <Image objectFit="cover" src={RelatorioFinan} alt="Segun Adebayo" />
            <Text align="center" fontSize="md">
              Relatórios Financeiros
            </Text>
          </DivCheckBox>
          <DivCheckBox selected={dados.checked[3]}>
            <Checkbox
              colorScheme="blackAlpha"
              isChecked={dados.checked[3]}
              onChange={(e) =>
                setDados({
                  ...dados,
                  checked: [
                    dados.checked[0],
                    dados.checked[1],
                    dados.checked[2],
                    e.target.checked,
                    dados.checked[4],
                    dados.checked[5],
                    dados.checked[6],
                    dados.checked[7],
                  ],
                })
              }
            />
            <Image
              objectFit="cover"
              src={ControleEstoque}
              alt="Segun Adebayo"
            />
            <Text align="center" fontSize="md">
              Controle de Estoque
            </Text>
          </DivCheckBox>

          <DivCheckBox selected={dados.checked[4]}>
            <Checkbox
              colorScheme="blackAlpha"
              isChecked={dados.checked[4]}
              onChange={(e) =>
                setDados({
                  ...dados,
                  checked: [
                    dados.checked[0],
                    dados.checked[1],
                    dados.checked[2],
                    dados.checked[3],
                    e.target.checked,
                    dados.checked[5],
                    dados.checked[6],
                    dados.checked[7],
                  ],
                })
              }
            />
            <Image objectFit="cover" src={AppProprio} alt="Segun Adebayo" />
            <Text align="center" fontSize="md">
              App próprio
            </Text>
          </DivCheckBox>

          <DivCheckBox selected={dados.checked[5]}>
            <Checkbox
              colorScheme="blackAlpha"
              isChecked={dados.checked[5]}
              onChange={(e) =>
                setDados({
                  ...dados,
                  checked: [
                    dados.checked[0],
                    dados.checked[1],
                    dados.checked[2],
                    dados.checked[3],
                    dados.checked[4],
                    e.target.checked,
                    dados.checked[6],
                    dados.checked[7],
                  ],
                })
              }
            />
            <Image objectFit="cover" src={EmisaoFiscal} alt="Segun Adebayo" />
            <Text align="center" fontSize="md">
              Emissão de Nota Fiscal
            </Text>
          </DivCheckBox>

          <DivCheckBox selected={dados.checked[6]}>
            <Checkbox
              colorScheme="blackAlpha"
              isChecked={dados.checked[6]}
              onChange={(e) =>
                setDados({
                  ...dados,
                  checked: [
                    dados.checked[0],
                    dados.checked[1],
                    dados.checked[2],
                    dados.checked[3],
                    dados.checked[4],
                    dados.checked[5],
                    e.target.checked,
                    dados.checked[7],
                  ],
                })
              }
            />
            <Image
              objectFit="cover"
              src={IntergracaoIfood}
              alt="Segun Adebayo"
            />
            <Text align="center" fontSize="md">
              Integração com o ifood
            </Text>
          </DivCheckBox>

          <DivCheckBox selected={dados.checked[7]}>
            <Checkbox
              colorScheme="blackAlpha"
              isChecked={dados.checked[7]}
              onChange={(e) =>
                setDados({
                  ...dados,
                  checked: [
                    dados.checked[0],
                    dados.checked[1],
                    dados.checked[2],
                    dados.checked[3],
                    dados.checked[4],
                    dados.checked[5],
                    dados.checked[6],
                    e.target.checked,
                  ],
                })
              }
            />
            <Image objectFit="cover" src={GestaoMesas} alt="Segun Adebayo" />
            <Text align="center" fontSize="md">
              Gestão de Mesas
            </Text>
          </DivCheckBox>
        </Grid>
      </Container>
      <Foolter />
    </>
  );
};

export default Select;
