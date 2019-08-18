import {
  CREATE_EXERCISE,
  RESET_EXERCISE_BY_ID,
  SELECT_CATEGORY,
  SET_EDIT_MODE,
  SET_EXERCISE,
  SET_EXERCISES
} from "./constants";

export const createExercise = payload => console.log(payload) || ({
  type: CREATE_EXERCISE,
  payload
})
export const setExercise = payload => ({
  type: SET_EXERCISE,
  payload
})
export const setExercises = payload => ({
  type: SET_EXERCISES,
  payload
})
export const resetExerciseById = payload => ({
  type: RESET_EXERCISE_BY_ID,
  payload
})
export const setEditMode = payload => ({
  type: SET_EDIT_MODE,
  payload
})
export const selectCategory = payload => ({
  type: SELECT_CATEGORY,
  payload
})