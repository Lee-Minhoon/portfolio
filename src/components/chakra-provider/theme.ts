import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: "var(--chakra-colors-chakra-body-bg)",
    subtleBg: "var(--chakra-colors-chakra-subtle-bg)",
    text: "var(--chakra-colors-chakra-body-text)",
    subtleText: "var(--chakra-colors-chakra-subtle-text)",
    inverseText: "var(--chakra-colors-chakra-inverse-text)",
    placeholder: "var(--chakra-colors-chakra-placeholder-color)",
    border: "var(--chakra-colors-chakra-border-color)",
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Roboto",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Roboto",
      },
    },
  },
});

export default theme;
