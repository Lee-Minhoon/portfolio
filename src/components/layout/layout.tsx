import { Flex, Heading, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Menu from "./menu";

export default function Layout() {
  return (
    <Flex direction={"column"}>
      <Flex
        pos={"fixed"}
        w={"full"}
        py={"12"}
        px={"24"}
        align={"flex-start"}
        justify={"space-between"}
      >
        <Flex
          direction={"column"}
          color={"bg"}
          gap={"1"}
          opacity={0.9}
          cursor={"pointer"}
          userSelect={"none"}
          _hover={{ opacity: 1 }}
          transition={"opacity 0.2s"}
        >
          <Heading size={"lg"} fontWeight={"semibold"}>
            LEE MINHOON
          </Heading>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            FRONTEND ENGINEER
          </Text>
        </Flex>
        <Menu />
      </Flex>
      <Outlet />
    </Flex>
  );
}
