import {
  CREATE_EXERCISE,
  RESET_EXERCISE_BY_ID,
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
    case RESET_EXERCISE_BY_ID: return {
      ...state,
      ...(exercise.id === action.payload ? { exercise: {
          title: 'Welcome',
          description: 'Please select the exercise from list on the left'
        }} : {})
    };
    case SELECT_CATEGORY: return {
      ...state,
      category: state.muscles[action.payload - 1]
    };
    default: return state;
  }
}

export default exercise