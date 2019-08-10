import React from "react";
import { createContext } from "react";

export const context = createContext();
export const { Provider, Consumer } = context;

export const withContext = Component => props => <Consumer>{
  value => <Component {...value} {...props}/>
}</Consumer>