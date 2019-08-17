import React, {useReducer} from 'react';
import { Provider } from "./context";
import rootReducer from "./rootReducer";
import { exercises } from "../__service__/storeValues";
import {muscles} from "./storeValues";

const initState = {
  exercise: {
    exercises: exercises,
    exercise: {
      title: 'Welcome',
      description: 'Please select the exercise from list on the left'
    },
    editMode: false,
    muscles,
  }
}
const CustomProvider = props => {
  const [state, dispatch] = useReducer(rootReducer, initState);

  return <Provider value={{ state, dispatch }}>
    { props.children }
  </Provider>
}

export default CustomProvider