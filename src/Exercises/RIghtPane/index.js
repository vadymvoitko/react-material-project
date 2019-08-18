import React, {useContext} from 'react'
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Form from "../../__service__/CommonComponents/Form";
import { context } from "../../__service__/context";
import {setEditMode, setExercise, setExercises} from "../actionCreators";

export default ({ classes }) => {

  const { state, dispatch } = useContext(context);
  const { exercises, editMode, exercise } = state.exercise;

  const onEditExercise = editedExercise => {
    dispatch(setExercises([
      ...exercises.filter(ex => ex.id !== editedExercise.id),
      editedExercise
    ]));
    dispatch(setEditMode(false));
    dispatch(setExercise(editedExercise));
  }

  return <Paper className={classes.paper}>
    <Typography component="div" gutterBottom>
      <Box
        color="secondary.main"
        fontSize={32}
      >
        { exercise.title }
      </Box>
    </Typography>
    {
      editMode
        ? <Form
            key={exercise.id}
            onSubmitExercise={onEditExercise}
            exercise={exercise}
          />
        : <>
            <Typography component="div" gutterBottom>
              <Box fontSize={16}>
                { exercise.description }
              </Box>
            </Typography>
          </>
    }
  </Paper>
}
