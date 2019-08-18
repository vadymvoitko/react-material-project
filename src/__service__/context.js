import { createContext } from "react";

export const context = createContext();
export const { Provider } = context;

// HOC for usage instead of children props
// export const withContext = Component => props => <Consumer>{
//   value => <Component {...value} {...props}/>
// }</Consumer>