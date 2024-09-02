import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import mainTheme from "./theme";
import WindowApp from "./window/app";
import "./styles.scss";

// This file is being used only for dev.
const root = document.createElement("div");
root.className = "container";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <ChakraProvider theme={mainTheme}>
      <ColorModeScript initialColorMode={mainTheme.config.initialColorMode} />
      <WindowApp />
    </ChakraProvider>
  </React.StrictMode>
);
