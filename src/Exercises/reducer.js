const exercise = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case "createExercise": return {
      ...state,
      exercises: [ ...state.exercises, action.payload ]
    };
    case "setExercise": return {
      ...state,
      exercise: action.payload
    };
    case "setExercises": return {
      ...state,
      exercises: action.payload
    };
    case "setEditMode": return {
      ...state,
      editMode: action.payload
    };
    case "resetExerciseById": return {
      ...state,
      ...(exercise.id === action.payload ? { exercise: {
          title: 'Welcome',
          description: 'Please select the exercise from list on the left'
        }} : {})
    };
    case "selectCategory": return {
      ...state,
      category: state.muscles[action.payload - 1]
    };
    default: return state;
  }
}

export default exercise