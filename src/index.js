import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import {amber, red} from "@material-ui/core/colors";

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
ReactDOM.render(<ThemeProvider theme={theme}><App/></ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
