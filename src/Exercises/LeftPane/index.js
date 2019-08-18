import React, {Fragment, useContext} from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {List} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {DeleteForever, Edit} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { context } from "../../__service__/context";
import {resetExerciseById, setEditMode, setExercise, setExercises} from "../actionCreators";

export default ({ classes }) => {
  const { state, dispatch } = useContext(context);
  const { exercises, editMode, exercise, muscles, category } = state.exercise;

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
        console.log('e', exercises);
        return exercises
      }, groups)
    )
  }
  const onSelect = id => {
    dispatch(setExercise(exercises.find(ex => ex.id === id)));
    dispatch(setEditMode(false));
  }
  const onSelectEdit = id => {
    dispatch(setExercise(exercises.find(ex => ex.id === id)));
    dispatch(setEditMode(true));
  }
  const onDeleteExercise = id => {
    dispatch(setExercises(exercises.filter(ex => ex.id !== id)));
    dispatch(setEditMode(exercise.id === id ? false : editMode));
    dispatch(resetExerciseById(id));
  }

  return <Paper className={classes.paper}>
    {
      getExercisesByMuscles().map(([group, exercises]) =>
        !category || category === group
          ? <Fragment key={group}>
            <Typography
              color="secondary"
              style={{textTransform: 'capitalize'}}
            >
              { group }
            </Typography>
            <List component="ul">
              {
                exercises.map(({ id, title }) =>
                  <ListItem
                    key={id}
                    button
                    onClick={() => onSelect(id)}
                  >
                    <ListItemText
                      primary={title}
                    />
                    <IconButton color='primary' onClick={(ev) => {
                      ev.stopPropagation();
                      onSelectEdit(id)
                    }}>
                      <Edit/>
                    </IconButton>
                    <IconButton color='primary' onClick={(ev) => {
                      ev.stopPropagation();
                      onDeleteExercise(id)
                    }}>
                      <DeleteForever />
                    </IconButton>
                  </ListItem>
                )
              }
            </List>
          </Fragment>
          : null
      )}
  </Paper>
}
