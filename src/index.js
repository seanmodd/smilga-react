import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"
import { ColorModeScript, useColorMode, Button, ChakraTheme } from "@chakra-ui/react"

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript theme={theme} />

    <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
