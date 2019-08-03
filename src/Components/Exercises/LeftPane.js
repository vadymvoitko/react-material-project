import React, {Fragment} from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {List} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {DeleteForever, Edit} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {withContext} from "../../context";

export default withContext(({ classes, exercises, category, onSelect, onDeleteExercise, onSelectEdit }) =>
  <Paper className={classes.paper}>
    {
      exercises.map(([group, exercises]) =>
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
  </Paper>)
