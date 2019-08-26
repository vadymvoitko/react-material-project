import React, {memo, useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const useStyles = () => ({
  root: {
    padding: 10
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 19,
  },
  exerciseForm: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto'
  },
});

const Form = memo(({ classes, exercise, onSubmitExercise, onCloseForm, musclesRange }) => {
  const getInitState = () => exercise || {
    title: '',
    description: '',
    muscles: '',
  }
  const [currentExercise, setCurrentExercise] = useState(getInitState());
  console.log('rend', onCloseForm);
  const { title, description, muscles } = currentExercise;
  const onHandleInput = entity => ({ target: { value } }) => {
    setCurrentExercise({
      ...currentExercise,
      [entity]: value
    })
  }
  const onSubmitExerciseLocal = ev => {
    ev.preventDefault();
    const { title, description, muscles, id } = currentExercise;
    const ex = {
      id: id || title.toLowerCase().replace(/\s/g, '-'),
      title,
      description,
      muscles
    }
    onSubmitExercise(ex)
    setCurrentExercise({ ...getInitState() })
    if (onCloseForm) onCloseForm()
  }

  return <form className={classes.exerciseForm}>
    <TextField
      value={title}
      required
      label="title"
      className={classes.textField}
      margin="normal"
      onChange={onHandleInput('title')}
    />
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="muscles"> Muscle Group </InputLabel>
      <Select
        classes={{root: classes.selectRoot}}
        value={muscles}
        onChange={onHandleInput('muscles')}
        inputProps={{
          name: 'muscles',
          id: 'muscles',
        }}
      >
        {
          musclesRange.map((muscles) =>
            <MenuItem
              value={muscles}
              key={muscles}
            >{ muscles }</MenuItem>
          )
        }
      </Select>
    </FormControl>
    <TextField
      value={description}
      label="description"
      multiline
      rows="4"
      onChange={onHandleInput('description')}
      className={classes.textField}
      fullWidth={true}
      margin="normal"
    />
    <br/>
    <Button
      color="primary"
      type="submit"
      onClick={onSubmitExerciseLocal}
      disabled={!title || !musclesRange}
    >
      { exercise ? 'Edit' : 'Create' }
    </Button>
  </form>

})

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Form)