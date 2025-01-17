import { WorldCanvas } from "@/components";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(ref.current?.clientHeight || 0);
  }, []);

  console.log(scrollY);

  return (
    <ChakraProvider>
      <WorldCanvas />
      {/* <Flex
        pos={"fixed"}
        w={"100vw"}
        top={"0"}
        left={"0"}
        color={"white"}
        onWheel={(e) => {
          setScrollY((prev) => Math.max(prev + e.deltaY, 0));
        }}
      >
        <Flex
          direction={"column"}
          transform={`translate3d(0, ${-scrollY}px, 0)`}
        >
          <Flex ref={ref} direction={"column"} pb={"150vw"}>
            <Flex
              direction={"column"}
              transform={`translate3d(0, ${Math.min(scrollY, height - 952)}px, 0)`}
            >
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
              <Heading>Hello, World!</Heading>
            </Flex>
          </Flex>
          <Flex>
            <Heading>Next Page</Heading>
          </Flex>
        </Flex>
      </Flex> */}
    </ChakraProvider>
  );
}

export default HomePage;
