import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import fonts from './assets/font/font';
import { Global } from "@emotion/react";
import { mode } from "@chakra-ui/theme-tools"


const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Inconsolata",
        color: mode("#0F1015", "#edf2fb")(props),
        bg: mode("#edf2fb", "#0F1015")(props),
        lineHeight: "base",
      },
    }),
  },
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
        <Global styles={fonts} />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
