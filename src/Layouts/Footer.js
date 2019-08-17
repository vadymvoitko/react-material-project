import React, {useContext} from 'react';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {withWidth} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { context } from "../__service__/context"
import {selectCategory} from "../Exercises/actionCreators";

export default withWidth()(
  () => {
    const { state, dispatch, width } = useContext(context);
    const { category, muscles } = state.exercise;

    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0

    const onIndexSelect = (e, index) =>
      dispatch(selectCategory(index))

    return <AppBar position='static'>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        variant={ width === 'xs' ? 'scrollable' : 'standard' }
        centered={ width !== 'xs' }
        scrollButtons={'on'}
      >
        <Tab label="All" />
        {
          muscles.map(group =>
            <Tab key={group} label={group} />
          )
        }
      </Tabs>
    </AppBar>
  }
)
