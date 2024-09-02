import { extendTheme } from "@chakra-ui/react";

const urlParams = new URLSearchParams(window.location.search);

const mainTheme = extendTheme({
  // config: {
  //   initialColorMode: urlParams.get("theme"),
  //   useSystemColorMode: false
  // },
  colors: {
    jambonz: {
      50: "#ffe1f1",
      100: "#ffb3c6",
      200: "#d84a1b",
      300: "#e87040",
      400: "#f8274e",
      500: "#d84a1b",
      600: "#e87040",
      700: "#99081a",
      800: "#6c0714",
      900: "#44060d",
    },
    grey: {
      50: "#FFFFFF",
      100: "#F5F5F5",
      200: "#ECECEC",
      300: "#E3E3E3",
      400: "#D9D9D9",
      500: "#EBEBEB",
      600: "#BFBFBF",
      700: "#969696",
      800: "#6D6D6D",
      900: "#434343",
    },
  },
  components: {
    FormLabel: {
      baseStyle: {
        _parent: { name: "form" },
        fontSize: "14px",
        fontWeight: "normal",
      },
    },
    Input: {
      baseStyle: {
        field: {
          _parent: { name: "form" },
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },
  },
});

export default mainTheme;
