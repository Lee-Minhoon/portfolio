import { PageRoutes } from "@/constants";
import { Box, Flex, Grid, Text, useDisclosure } from "@chakra-ui/react";

export default function Menu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex pos={"relative"} direction={"column"} align={"flex-end"}>
      <Flex
        direction={"column"}
        align={"flex-end"}
        overflow={"hidden"}
        maxH={"36px"}
        color={"bg"}
        cursor={"pointer"}
        userSelect={"none"}
        onClick={isOpen ? onClose : onOpen}
        zIndex={2}
        _hover={{
          p: {
            opacity: 1,
            filter: "drop-shadow(0px 0px 3px currentColor)",
          },
        }}
      >
        <Text
          opacity={0.9}
          fontSize={"2xl"}
          fontWeight={"semibold"}
          transform={isOpen ? "translateY(-100%)" : "translateY(0)"}
          transition={"all 0.2s"}
        >
          MENU
        </Text>
        <Text
          opacity={0.9}
          fontSize={"2xl"}
          fontWeight={"semibold"}
          transform={isOpen ? "translateY(-100%)" : "translateY(0)"}
          transition={"all 0.2s"}
        >
          CLOSE
        </Text>
      </Flex>
      <Flex
        pos={"absolute"}
        top={"-100%"}
        direction={"column"}
        opacity={isOpen ? 1 : 0}
        visibility={isOpen ? "visible" : "hidden"}
        transition={"all 0.5s"}
        borderRadius={"lg"}
        gap={"2"}
        w={"xs"}
        zIndex={1}
      >
        <Flex direction={"column"}>
          {Array.from({ length: 20 }).map((_, index) => {
            const randomX = Math.random() * 1000;
            return (
              <Box
                w={"full"}
                h={"4"}
                key={index}
                bg={"white"}
                transform={
                  isOpen ? "none" : `translate3d(${randomX}px, ${0}px, -${0}px)`
                }
                opacity={isOpen ? 1 : 0}
                transition={"all 0.5s"}
              />
            );
          })}
        </Flex>
        <Flex direction={"column"} pos={"absolute"} p={"4"} zIndex={2}>
          {Object.entries(PageRoutes).map(([key, value]) => {
            return (
              <Text
                key={key}
                fontSize={"sm"}
                fontWeight={"semibold"}
                cursor={"pointer"}
                _hover={{ color: "bg" }}
                zIndex={1}
                transition={"color 0.2s"}
              >
                {key}
              </Text>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}
