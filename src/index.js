import React from 'react';
import ReactDOM from 'react-dom';
import './__service__/index.css';
import App from './__service__/App';
import * as serviceWorker from './__service__/serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { amber, red } from "@material-ui/core/colors";
import CustomProvider from "./__service__/CustomProvider";

const theme  = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber[500],
      light: amber[200],
      dark: amber[700],
    },
    type: 'dark'
  },
  spacing: 10
})
ReactDOM.render(
  <CustomProvider>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </CustomProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about __service__ workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
