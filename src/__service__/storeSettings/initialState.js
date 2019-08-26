import {exercises, musclesRange} from "./storeValues";

export const initState = {
  exercise: {
    exercises: exercises,
    exercise: {
      title: 'Welcome',
      description: 'Please select the exercise from list on the left'
    },
    editMode: false,
    musclesRange,
  },
  layout: {
    isDialogOpen: false
  }
}