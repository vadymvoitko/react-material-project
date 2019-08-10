import React, {useContext} from 'react'
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Form from "./Form";
import { context } from "../../context";

export default ({ classes }) => {
  const {
    exercise: {
      muscles, id,
      title = 'Welcome',
      description = 'Please select the exercise from list on the left'
    },
    editMode,
    onEditExercise
  } = useContext(context);

  return <Paper className={classes.paper}>
    <Typography component="div" gutterBottom>
      <Box
        color="secondary.main"
        fontSize={32}
      >
        { title }
      </Box>
    </Typography>
    {
      editMode
        ? <Form
            key={id}
            onSubmitExercise={onEditExercise}
            exercise={{
              muscles, title, description, id
            }}
          />
        : <>
            <Typography component="div" gutterBottom>
              <Box fontSize={16}>
                { description }
              </Box>
            </Typography>
          </>
    }
  </Paper>
}
