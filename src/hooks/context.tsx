import React, { createContext, useState } from "react";

//Tipando os dados que quero para usuário
type UserType = {
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  cep: string;
  endereço: string;
  complemento: string;
  estado: string;
  cidade: string;
  numero: string;
  checked: boolean[];
};

//Tipando as Props do contexto
type PropsUserContext = {
  dados: UserType;
  setDados: React.Dispatch<React.SetStateAction<UserType>>;
};

//Valor default do contexto
const DEFAULT_VALUE = {
  dados: {
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    cep: "",
    endereço: "",
    complemento: "",
    estado: "",
    cidade: "",
    numero: "",
    checked: [false, false, false, false, false, false, false, false],
  },

  setDados: () => {}, //função de inicialização
};

//criando nosso contexto UserContext
const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

/**
 * Função que irá conter o estado e função que irá alterar o estado 'setState'
 * quer irá prover o contexto para os componentes filhos da árvore
 */
const UserContextProvider: React.FC = ({ children }) => {
  const [dados, setDados] = useState(DEFAULT_VALUE.dados);

  return (
    <UserContext.Provider
      value={{
        dados,
        setDados,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContextProvider };
export default UserContext;
