import React, { useContext, useState } from 'react';
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Add } from '@material-ui/icons';
import Fab from "@material-ui/core/Fab";
import Form from "./Form";
import { withStyles } from "@material-ui/core";
import { context } from "./../../context"
import { compose } from "recompose";

const useStyles = theme => ({
  root: {
    padding: 10
  }
});

const CreateDialog = (classes) => {
  const [open, setOpen] = useState(false);
  const { onCreate } = useContext(context);
  const onHandleToggle = () => {
    setOpen(!open)
  }
  const onCloseForm = () => {
    setOpen(false)
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
      open={open}
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
          onSubmitExercise={onCreate}
          onCloseForm={onCloseForm}
        />
      </DialogContent>
    </Dialog>
  </>
}

export default compose(
  withStyles(useStyles)
)(CreateDialog)
