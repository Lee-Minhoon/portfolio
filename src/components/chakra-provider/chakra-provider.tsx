import { ChakraProvider as _ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

interface ChakraProviderProps {
  children?: React.ReactNode;
}

const ChakraProvider = ({ children }: ChakraProviderProps) => {
  return <_ChakraProvider theme={theme}>{children}</_ChakraProvider>;
};

export default ChakraProvider;
