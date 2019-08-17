import React from 'react';
import { Header, Footer } from "../Layouts";
import Exercises from '../Exercises'
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
  return <>
    <CssBaseline/>
    <Header/>
    <Exercises/>
    <Footer/>
  </>
}

export default App