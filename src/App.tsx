import { ChakraProvider, Heading } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Heading color={"teal.500"}>Hello, World!</Heading>
    </ChakraProvider>
  );
}

export default App;
