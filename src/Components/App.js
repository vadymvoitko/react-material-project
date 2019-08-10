import React, { useState } from 'react';
import { Header, Footer } from "./Layouts";
import Exercises from './Exercises'
import { exercises as exercisesInitial, muscles } from "../store";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "./../context";

export default () => {
  const [exercises, setExercises] = useState(exercisesInitial);
  const [exercise, setExercise] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [category, setCategory] = useState('');

  const getExercisesByMuscles = () => {
    const groups = muscles.reduce((groups, muscle) => {
      groups[muscle] = [];
      return groups
    }, {})

    return Object.entries(
      exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        return exercises
      }, groups)
    )
  }
  const onSelectCategory = newCategory => {
    setCategory(newCategory)
  }

  const onSelectExercise = id => {
    setExercise(exercises.find(ex => ex.id === id));
    setEditMode(false);
  }

  const onCreateExercise = ex => {
    setExercises([...exercises, ex]);
  }

  const onSelectEdit = id => {
    setExercise(exercises.find(ex => ex.id === id));
    setEditMode(true);
  }

  const onDeleteExercise = id => {
    setExercises(exercises.filter(ex => ex.id !== id));
    setEditMode(exercise.id === id ? false : editMode);
    setExercise(exercise.id === id ? {} : exercise);
  }

  const onEditExercise = editedExercise => {
    setExercises([
      ...exercises.filter(ex => ex.id !== editedExercise.id),
      editedExercise
    ]);
    setEditMode(false);
    setExercise(editedExercise);
  }

  const getContext = () => {
    return {
      muscles,
      exercise,
      editMode,
      category,
      onCreate: onCreateExercise,
      exercises: getExercisesByMuscles(),
      onSelect: onSelectExercise,
      onDeleteExercise: onDeleteExercise,
      onSelectEdit: onSelectEdit,
      onSelectCategory: onSelectCategory,
      onEditExercise: onEditExercise
    }
  }

  return <Provider value={getContext()}>
    <CssBaseline/>
    <Header/>
    <Exercises/>
    <Footer/>
  </Provider>
}

