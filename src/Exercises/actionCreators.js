export const createExercise = payload => console.log(payload) || ({
  type: "createExercise",
  payload
})
export const setExercise = payload => ({
  type: "setExercise",
  payload
})
export const setExercises = payload => ({
  type: "setExercises",
  payload
})
export const resetExerciseById = payload => ({
  type: "resetExerciseById",
  payload
})
export const setEditMode = payload => ({
  type: "setEditMode",
  payload
})
export const selectCategory = payload => ({
  type: "selectCategory",
  payload
})