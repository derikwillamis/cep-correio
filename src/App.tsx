import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import GlobalContext from "./hooks";
import Routes from "./Routes";

function App() {
  return (
    <GlobalContext>
      <ChakraProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ChakraProvider>
    </GlobalContext>
  );
}

export default App;
