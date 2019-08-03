import React, { Component } from 'react';
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Add } from '@material-ui/icons';
import Fab from "@material-ui/core/Fab";
import Form from "./Form";
import { withStyles } from "@material-ui/core";
import { withContext } from "./../../context"

const useStyles = theme => ({
  root: {
    padding: 10
  }
});

class CreateDialog extends Component {
  state = {
    open: false,
  }

  onHandleToggle = () =>
    this.setState({
      open: !this.state.open
    })

  onCloseForm = () =>
    this.setState({
      open: false
    })

  render() {
    const { classes, onCreate } = this.props;
    return <>
        <Fab
          color="secondary"
          aria-label="Add"
          size="small"
          onClick={this.onHandleToggle}
        >
          <Add />
        </Fab>
        <Dialog
          classes={{
            paper: classes.root,
          }}
          open={this.state.open}
          onClose={this.onHandleToggle}
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
              onCloseForm={this.onCloseForm}
            />
          </DialogContent>
        </Dialog>
      </>
  }
}

export default withContext(withStyles(useStyles)(CreateDialog))
