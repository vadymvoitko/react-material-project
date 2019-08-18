import React from 'react'
import Grid from "@material-ui/core/Grid";
import RightPane from "./RIghtPane";
import LeftPane from "./LeftPane";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: 1,
    marginBottom: 1,
    overflowY: 'auto',
    height: '100%'
  },
  //global can be used to access global elements over project
  '@global': {
    'html, body, #root': {
      height: '100%'
    },
  },
  container: {
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px - 48px)',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'calc(100% - 56px - 48px)',
    },
  },
  sides: {
    [theme.breakpoints.up('sm')]: {
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      height: '50%',
    },
  }
})

export default withStyles(styles)(
  ({classes}) =>
    <Grid container className={classes.container}>
      <Grid className={classes.sides} item xs={12} sm={6}>
        <LeftPane classes={classes}/>
      </Grid>
      <Grid className={classes.sides} item xs={12} sm={6}>
        <RightPane classes={classes}/>
      </Grid>
    </Grid>
);
