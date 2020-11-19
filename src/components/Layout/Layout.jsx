import React, { Fragment } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css'

const layout = (props) => {
  return (<Fragment>
    <div>
      <Toolbar />
      <SideDrawer />
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Fragment>)
};

export default layout;