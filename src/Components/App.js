import React, {Component} from 'react';
import { Header, Footer } from "./Layouts";
import Exercises from './Exercises'
import { exercises, muscles } from "../store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "./../context";


export default class extends Component {
  state = {
    exercises,
    exercise: {},
    editMode: false,
    category: ''
  }
  getExercisesByMuscles() {
    const groups = muscles.reduce((groups, muscle) => {
        groups[muscle] = [];
        return groups
      }, {})

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        return exercises
      }, groups)
    )
  }
  onSelectCategory = category => {
    this.setState({
      category
    })
  }

  onSelectExercise = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false,
    }))
  }

  onCreateExercise = ex => {
    this.setState(({ exercises }) => {
      exercises.push(ex);
      return {
        exercises,
      }
    })
  }

  onSelectEdit = id => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))
  }

  onDeleteExercise = id => {
    this.setState(({ exercises, exercise, editMode }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: exercise.id === id ? false : editMode,
      exercise: exercise.id === id ? {} : exercise
    }))
  }

  onEditExercise = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ],
      exercise,
      editMode: false
    }))
  }

  getContext = () => {
    return {
      ...this.state,
      muscles,
      onCreate: this.onCreateExercise,
      exercises: this.getExercisesByMuscles(),
      onSelect: this.onSelectExercise,
      onDeleteExercise: this.onDeleteExercise,
      onSelectEdit: this.onSelectEdit,
      onSelectCategory: this.onSelectCategory,
      onEditExercise: this.onEditExercise
    }
  }

 render() {
  // CssBaseline is to refuse browsers to set their own margins to root elems
   return <Provider value={this.getContext()}>
     <CssBaseline/>
     <Header/>
     <Exercises/>
     <Footer/>
   </Provider>
 }
}


