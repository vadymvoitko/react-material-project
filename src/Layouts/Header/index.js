import React from 'react';
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import CreateDialog from "../CreateDialog";
import {withStyles} from "@material-ui/core";

const styles = {
  flex: {
    flex: 1
  }
}
export default withStyles(styles)(
  ({classes}) =>
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.flex}>
          Exercise Database
        </Typography>
        <CreateDialog/>
      </Toolbar>
    </AppBar>
)
