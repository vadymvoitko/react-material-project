import React from 'react';
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import {withWidth} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import {withContext} from "../../context";

export default withContext(withWidth()(
  ({ muscles, category, onSelectCategory, width }) => {
    const index = category
      ? muscles.findIndex(group => group === category) + 1
      : 0

    const onIndexSelect = (e, index) =>
      onSelectCategory(index === 0 ? '' : muscles[index - 1])

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
))
