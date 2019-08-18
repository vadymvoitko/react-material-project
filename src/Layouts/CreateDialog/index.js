import React, { useContext } from 'react';
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Add } from '@material-ui/icons';
import Fab from "@material-ui/core/Fab";
import Form from "../../__service__/CommonComponents/Form";
import { withStyles } from "@material-ui/core";
import { context } from "../../__service__/context"
import { compose } from "recompose";
import {createExercise} from "../../Exercises/actionCreators";
import {setDialogOpen} from "../actionCreators";

const useStyles = theme => ({
  root: {
    padding: 10
  }
});

const CreateDialog = (classes) => {
  const { state, dispatch } = useContext(context)
  const { isDialogOpen } = state.layout;
  const onHandleToggle = () => {
    dispatch(setDialogOpen(!isDialogOpen))
  }
  const onCloseForm = () => {
    dispatch(setDialogOpen(false))
  }
  return <>
    <Fab
      color="secondary"
      aria-label="Add"
      size="small"
      onClick={onHandleToggle}
    >
      <Add />
    </Fab>
    <Dialog
      classes={{
        paper: classes.root,
      }}
      open={isDialogOpen}
      onClose={onHandleToggle}
      fullWidth={true}
      maxWidth={"xs"}
    >
      <DialogTitle id="alert-dialog-title">
        Create a New Exercise
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please fill out the form below
        </DialogContentText>
        <Form
          onSubmitExercise={(ev) => dispatch(createExercise(ev))}
          onCloseForm={onCloseForm}
        />
      </DialogContent>
    </Dialog>
  </>
}

export default compose(
  withStyles(useStyles)
)(CreateDialog)
