import React, {Component} from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { muscles } from "../__service__/storeValues";
import Button from "@material-ui/core/Button";

const useStyles = theme => ({
  root: {
    padding: 10
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
  },
  dense: {
    marginTop: 19,
  },
  exerciseForm: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto'
  },
  selectRoot: {
  }
});

class Form extends Component {
  state = {
    ...this.getInitState(),
    muscles,
  }

  getInitState() {
    const { exercise } = this.props;

    return exercise ? {...exercise, muscle: exercise.muscles} : {
      title: '',
      description: '',
      muscle: '',
    }
  }

  onHandleInput = entity => ({ target: { value } }) => {
    this.setState({
      [entity]: value
    })
  }

  onSubmitExercise = () => {
    const { title, description, muscle, id } = this.state;
    const ex = {
      id: id || title.toLowerCase().replace(/\s/g, '-'),
      title,
      description,
      muscles: muscle
    }
    this.props.onSubmitExercise(ex)
    this.setState({ ...this.getInitState(),
      muscles })
    if (this.props.onCloseForm) this.props.onCloseForm()
  }
  render() {
    const { classes, exercise } = this.props,
      { title, description, muscles, muscle } = this.state
    return <form className={classes.exerciseForm}>
      <TextField
        value={title}
        required
        label="title"
        className={classes.textField}
        margin="normal"
        onChange={this.onHandleInput('title')}
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="muscles"> Muscle Group </InputLabel>
        <Select
          classes={{root: classes.selectRoot}}
          value={muscle}
          onChange={this.onHandleInput('muscle')}
          inputProps={{
            name: 'muscles',
            id: 'muscles',
          }}
        >
          {
            muscles.map((muscle) =>
              <MenuItem
                value={muscle}
                key={muscle}
              >{ muscle }</MenuItem>
            )
          }
        </Select>
      </FormControl>
      <TextField
        value={description}
        label="description"
        multiline
        rows="4"
        onChange={this.onHandleInput('description')}
        className={classes.textField}
        fullWidth={true}
        margin="normal"
      />
      <br/>
      <Button
        color="primary"
        type="submit"
        onClick={this.onSubmitExercise}
        disabled={!title || !muscles}
      >
        { exercise ? 'Edit' : 'Create' }
      </Button>
    </form>
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Form)