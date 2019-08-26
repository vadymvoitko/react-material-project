import React, {useReducer} from 'react';
import { Provider } from "../context";
import rootReducer from "./rootReducer";
import {initState} from "./initialState";

const CustomProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, initState);

  return <Provider value={{ state, dispatch }}>
    { props.children }
  </Provider>
}

export default CustomProvider