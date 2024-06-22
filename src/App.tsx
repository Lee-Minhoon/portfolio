import { WorldCanvas } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <WorldCanvas />
    </ChakraProvider>
  );
}

export default App;
