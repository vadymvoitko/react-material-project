import {
  CREATE_EXERCISE,
  SELECT_CATEGORY,
  SET_EDIT_MODE,
  SET_EXERCISE,
  SET_EXERCISES
} from "./constants";

const exercise = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EXERCISE: return {
      ...state,
      exercises: [ ...state.exercises, action.payload ]
    };
    case SET_EXERCISE: return {
      ...state,
      exercise: action.payload
    };
    case SET_EXERCISES: return {
      ...state,
      exercises: action.payload
    };
    case SET_EDIT_MODE: return {
      ...state,
      editMode: action.payload
    };
    case SELECT_CATEGORY: return {
      ...state,
      category: state.musclesRange[action.payload - 1]
    };
    default: return state;
  }
}

export default exercise